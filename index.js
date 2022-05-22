const express = require("express");
const app = express();
var PORT = 3000;

app.get("/store", (req, res) => {
  res.redirect("https://store.hexoni.com");
});

app.get("/shop", (req, res) => {
  res.redirect("https://store.hexoni.com");
});

app.get("/discord", (req, res) => {
  res.redirect("https://discord.gg/ybwuS3JFTa");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
