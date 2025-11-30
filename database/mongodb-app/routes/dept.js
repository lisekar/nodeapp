const express = require("express");
const Dept = require("../models/Dept")
const deptRouter = express.Router()

// ----- dept routes ----
// get all users - GET method - uri - api/dept
deptRouter.get("/", async (req,res)=>{
    const dept = await Dept.find();
    res.status(201).json(dept)
})

// Users Routes - POST method - uri - api/dept
deptRouter.post("/", async (req, res) => {
  const url = req.url;
  const data = req.body;
  console.log("🚀 ~ data:", data)
  console.log("user data :: ", data, url);
  const dept = new Dept(data);
  const saved = await dept.save();
  res.status(201).json(saved); // status code 201 :  response code with data. i.e new resource created
});

module.exports = deptRouter