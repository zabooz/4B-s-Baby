const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/convert", (req, res) => {
  const filePath = path.join(__dirname, "public", "rockyou.txt");
  const readStream = fs.createReadStream(filePath, "utf8");
  let lines = [];

  readStream.on("data", (chunk) => {
    lines.push(
      ...chunk
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
    );
  });

  readStream.on("end", () => {
    const jsonContent = JSON.stringify(lines, null, 2);
    res.setHeader("Content-disposition", "attachment; filename=rockyou.json");
    res.setHeader("Content-type", "application/json");
    res.send(jsonContent);
  });

  readStream.on("error", (err) => {
    console.error("Error reading file:", err);
    res.status(500).send("Error reading file");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
