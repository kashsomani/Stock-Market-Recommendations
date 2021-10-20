const express = require('express')
const app = express()

const path = require('path')

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public", "index.html"));
  });
  
  // start express server on port 5001
  app.listen(5001, () => {
    console.log("server started on port 5001");
  });