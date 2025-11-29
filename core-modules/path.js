const path = require('path');
const filepath = "/Users/livisekar/projects/nodeapp/core-modules/fs.js";

console.log("Base name : ",path.basename(filepath))     // get only file name
console.log("Directory name : ",path.dirname(filepath))     // get directory path
console.log("Extention name : ", path.extname(filepath))    // get file extention


// get full path of "test.txt"
console.log("joinedpath__dirname",__dirname+'\/test.txt') // not recommended

console.log("Joined path : ", path.join(__dirname,"demo","test.txt"))          //join method used to create or read file path irres[pectively OS platform