// scrape.js
const puppeteer = require('puppeteer');

// Fungsi untuk melakukan scraping dan mengambil balance
async function scrapeBalance(pubkey) {
  let browser;
  try {
    browser = await puppeteer.launch();
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

    console.log(`Scraped balance value: ${balanceValue}`); // Logging the scraped value
    return balanceValue;
  } catch (error) {
    console.error('Error scraping balance:', error); // Enhanced error handling
    throw error; // Re-throw error to be handled by the calling function
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = scrapeBalance;
