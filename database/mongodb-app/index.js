const express = require("express");
const db = require("./db");
// const User = require("./models/User");
// const Dept = require("./models/Dept");
const userRoutes = require("./routes/users")
const deptRoutes = require('./routes/dept')
const app = express();


app.use(express.json()); // middleware to convert data to json and accept by req body in post method
app.use("/api/users",userRoutes)
app.use('/api/dept',deptRoutes)

app.listen(3000, () => {
  console.log("Server listening to http://localhost:3000 ....");
});
