const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.get("/file/download", (req, res) => {
  const { query } = req;
  const { id: fileID } = query;

  if (!query || !fileID) {
    res.send("Please pass a valid id.");
    return;
  }

  const file = path.join(__dirname, "file", fileID);

  res.sendFile(file, (err) => {
    if (err) {
      res.send(err.message);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at PORT ${process.env.PORT}`);
});
