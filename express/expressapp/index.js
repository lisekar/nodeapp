// Main entry file

// Handle with express framework
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("request URL", req.url);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello Express app !");
});
app.post("/", (req, res) => {
  res.status(200).send("Hello Express ! this is POST method");
});
app.use((req, res, next) => {
  res.status(404).send("Page not found !");
});
app.listen(5001, () => {
  console.log("Server listening http://localhost:5001");
});
