const mongoose = require("mongoose")

const deptSchema = new mongoose.Schema({
    "deptName": String,
    "section": String
})

module.exports = mongoose.model("Dept",deptSchema)           // export Dept schema to outside access
