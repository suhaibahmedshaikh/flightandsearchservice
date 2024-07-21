const express = require("express");

const { PORT } = require("./config/serverConfig");

const app = express();

app.get("/", (req, res) => {
  res.send("We are Open");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
