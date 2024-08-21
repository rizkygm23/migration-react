import puppeteer from "puppeteer";
import { Client } from 'pg';

// Koneksi ke PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL, // URL koneksi PostgreSQL
  ssl: {
    rejectUnauthorized: false
  }
});

const SearchValidator = async (pubkeyinputan) => {
  const pubkey = pubkeyinputan;

  // Fungsi untuk membaca data dari PostgreSQL
  async function readData() {
    await client.connect();
    const res = await client.query('SELECT * FROM balance WHERE pubkey = $1', [pubkey]);
    await client.end();
    return res.rows[0] || {};
  }

  // Fungsi untuk menyimpan data ke PostgreSQL
  async function saveData(data) {
    await client.connect();
    await client.query(`
      INSERT INTO balance (pubkey, balance, latest_balance)
      VALUES ($1, $2, $3)
      ON CONFLICT (pubkey)
      DO UPDATE SET
        latest_balance = EXCLUDED.balance,
        balance = EXCLUDED.balance
    `, [data.pubkey, data.balance, data.latest_balance]);
    await client.end();
  }

  // Load data lama dari database
  const oldData = await readData();

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`https://andes.dill.xyz/validators?p=50&ps=25&pubkey=${pubkey}`);

  await page.waitForSelector('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-1.css-1doag2i');

  const balanceValue = await page.evaluate(() => {
    const elements = document.querySelectorAll('h6');
    let balanceText = null;

    elements.forEach(element => {
      if (element.textContent.includes('Balance')) {
        const balanceElement = element.nextElementSibling;
        if (balanceElement) {
          balanceText = balanceElement.textContent.trim();
        }
      }
    });

    // Mengambil angka pertama dari balance menggunakan regex
    const balanceNumber = balanceText.match(/[\d,]+(\.\d+)?/);
    return balanceNumber ? balanceNumber[0].replace(/,/g, '') : null;
  });

  console.log(`BalanceValue retrieved: ${balanceValue}`);

  await browser.close();

  if (balanceValue) {
    // Mengecek apakah balance berubah
    let balanceChanged = 'new';
    let latest_balance = oldData.balance || balanceValue;

    if (oldData.balance !== undefined) {
      if (parseFloat(balanceValue) > parseFloat(oldData.latest_balance)) {
        balanceChanged = 'increased';
      } else if (parseFloat(balanceValue) < parseFloat(oldData.latest_balance)) {
        balanceChanged = 'decreased';
      } else {
        balanceChanged = 'unchanged';
      }
      latest_balance = oldData.balance; // Update latest_balance ke nilai balance sebelumnya
    }

    // Menyimpan balance baru ke database
    const data = {
      pubkey: pubkey,
      balance: balanceValue,
      latest_balance: latest_balance,
    };
    await saveData(data);

    // Return data untuk ditampilkan di web
    return {
      pubkey: pubkey,
      balance: balanceValue,
      latest_balance: latest_balance,
      balance_changed: balanceChanged
    };
  } else {
    throw new Error('Failed to retrieve balance.');
  }
};

export default SearchValidator;
