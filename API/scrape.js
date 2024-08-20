import puppeteer from "puppeteer";
import { existsSync, writeFileSync, readFileSync } from "fs";

const SearchValidator = async (pubkeyinputan) => {
  const pubkey = pubkeyinputan;
  const filePath = './balances.json';

  // Fungsi untuk membaca data dari file JSON
  function readData() {
    if (existsSync(filePath)) {
      const data = readFileSync(filePath);
      return JSON.parse(data);
    }
    return {};
  }

  // Fungsi untuk menyimpan data ke file JSON
  function saveData(data) {
    writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  // Load data lama
  const oldData = readData();

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
    let balanceChanged = false;
    if (oldData[pubkey] && oldData[pubkey] !== balanceValue) {
      
      balanceChanged = true;
    }

    // Menyimpan balance baru ke file JSON
    oldData[pubkey] = balanceValue;
    saveData(oldData);

    // Return data untuk ditampilkan di web
    return {
      pubkey: pubkey,
      balance: balanceValue,
      latestBalance : oldData[pubkey],
      balanceChanged: balanceChanged
     
      
    };
  } else {
    throw new Error('Failed to retrieve balance.');
  }
};

export default SearchValidator;
