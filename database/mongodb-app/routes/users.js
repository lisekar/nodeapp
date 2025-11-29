const express = require("express")
const User = require("../models/User")
const router = express.Router();

// install nodemon package :  to reload always after change done.
// Users Routes - POST method - uri - api/users
router.post("/", async (req, res) => {
  const url = req.url;
  const data = req.body;
  console.log("user data :: ", data, url);
  const user = new User(data);
  const saved = await user.save();
  res.status(201).json(saved); // status code 201 :  response code with data. i.e new resource created
});

// get all users - GET method - uri - api/users
router.get("/", async (req,res)=>{
    const user = await User.find();
    res.status(201).json(user)
})

// get a single user , GET method - uri - api/users/:id
router.get('/:userId', async (req,res)=>{
    req.params.userId
    // console.log("id : ", req.params.userId)
    const user = await User.findById(req.params.userId);
    res.status(201).json(user)
})

// update user , PUT method - uri - api/users/:id
router.put('/:userId', async (req,res)=>{
    req.params.userId
    // console.log("id : ", req.params.userId)
    const user = await User.findByIdAndUpdate(req.params.userId,req.body, {new:true})
    res.status(201).json(user)          // 201 - shows create data - with this status code
})

// delete user ,  Delete method - uri - api/users/:id
router.delete('/:userId', async (req,res)=>{
    req.params.userId
    // console.log("id : ", req.params.userId)
    await User.findByIdAndDelete(req.params.userId)
    res.sendStatus(204)     // delete the record by ID - dosesn't return any data - 204 - status code
})

module.exports = router;