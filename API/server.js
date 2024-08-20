// server.js
import express from "express";
import SearchValidator from "./scrape.js"; // Import fungsi scraping

const app = express();
const PORT = 5000;

app.use(express.static("public"));

app.use(express.json());

app.post("/api/search", async (req, res) => {
  try {
    const { pubkey } = req.body;
    const result = await SearchValidator(pubkey);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
