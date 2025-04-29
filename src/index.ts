import express from "express";
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
