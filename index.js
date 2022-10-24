const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server side is running");
});

app.listen(port, () => {
  console.log(`Server side is running on port  ${port}`);
});
