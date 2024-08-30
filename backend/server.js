// server.js
const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const scrapeBalance = require('./scrape');
const cors = require('cors');
require('dotenv').config();

// Koneksi ke PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL, // URL koneksi PostgreSQL
  ssl: {
    rejectUnauthorized: false
  }
});

// Connect to the database once when the server starts
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1); // Exit the process if connection fails
  }
}

connectToDatabase();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Fungsi untuk membaca data dari PostgreSQL
async function readData(pubkey) {
  try {
    const res = await client.query('SELECT * FROM data_validator WHERE pubkey = $1', [pubkey]);
    return res.rows[0] || {};
  } catch (error) {
    console.error('Error reading data from database', error);
    throw error;
  }
}

// Fungsi untuk menyimpan data ke PostgreSQL
async function saveData(data) {
  try {
    await client.query(`
      INSERT INTO data_validator (pubkey, balance, Lastbalance)
      VALUES ($1, $2, $3)
      ON CONFLICT (pubkey)
      DO UPDATE SET
        Lastbalance = EXCLUDED.balance,
        balance = EXCLUDED.balance
    `, [data.pubkey, data.balance, data.latest_balance]);
  } catch (error) {
    console.error('Error saving data to database', error);
    throw error;
  }
}

// Fungsi untuk mengonversi balance dari string ke angka
function parseBalance(balance) {
  const parsed = parseFloat(balance.replace(/,/g, ''));
  return isNaN(parsed) ? 0 : parsed;
}

// Endpoint untuk mencari dan memperbarui data
app.post('/search', async (req, res) => {
  const pubkey = req.body.pubkey;

  if (!pubkey) {
    return res.status(400).json({ error: 'Pubkey is required' });
  }

  try {
    // Load data lama dari database
    const oldData = await readData(pubkey);
    const balanceValue = await scrapeBalance(pubkey);

    if (balanceValue) {
      // Konversi balanceValue dari string ke angka
      const balanceNumber = parseBalance(balanceValue);
      const oldBalanceNumber = parseBalance(oldData.balance || '0');
      const oldLatestBalanceNumber = parseBalance(oldData.latest_balance || '0');
      
      // Mengecek apakah balance berubah
      let balanceChanged = 'new';
      let latest_balance = oldBalanceNumber;

      if (oldData.balance !== undefined) {
        if (balanceNumber > oldLatestBalanceNumber) {
          balanceChanged = 'increased';
        } else if (balanceNumber < oldLatestBalanceNumber) {
          balanceChanged = 'decreased';
        } else {
          balanceChanged = 'unchanged';
        }
        latest_balance = oldData.balance; // Update latest_balance ke nilai balance sebelumnya
      }

      // Menyimpan balance baru ke database
      const data = {
        pubkey: pubkey,
        balance: balanceNumber.toString(),
        latest_balance: latest_balance.toString(),
      };
      await saveData(data);

      // Return data untuk ditampilkan di web
      return res.json({
        pubkey: pubkey,
        balance: balanceNumber.toString(),
        latest_balance: latest_balance.toString(),
        balance_changed: balanceChanged
      });
    } else {
      throw new Error('Failed to retrieve balance.');
    }
  } catch (error) {
    console.error('Error occurred:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Mulai server di port 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
