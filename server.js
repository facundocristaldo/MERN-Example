const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("System up and running at port ", port);
});
