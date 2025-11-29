const express = require("express");
const db = require("./db");
const User = require("./models/User");
const app = express();
const userRoutes = require("./routes/users")

app.use(express.json()); // middleware to convert data to json and accept by req body in post method
app.use("/api/users",userRoutes)
app.use("api/dept",userRoutes)

app.listen(3000, () => {
  console.log("Server listening to http://localhost:3000 ....");
});
