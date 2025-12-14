const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/generate", async (req, res) => {
  const r = await fetch("https://api.guerrillamail.com/ajax.php?f=get_email_address");
  const data = await r.json();
  res.json(data);
});

app.get("/inbox", async (req, res) => {
  const sid = req.query.sid;
  const r = await fetch(
    `https://api.guerrillamail.com/ajax.php?f=get_email_list&offset=0&sid_token=${sid}`
  );
  const data = await r.json();
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
