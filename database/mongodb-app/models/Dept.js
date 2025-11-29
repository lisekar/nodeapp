const mongoose = require("mongoose")

const deptSchema = new mongoose.Schema({
    "deptName": String,
    "section":string
})

module.exports("Dept",deptSchema)           // export Dept schema to outside access