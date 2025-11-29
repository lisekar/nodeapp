const fs = require('fs')

// write file (synchronous)
// fs.writeFileSync("test.txt","Hello Node js !!!!");
// fs.writeFileSync("../intro/test.txt","Hello Node js !!!!!!");
// console.log("File written!")

// Read File
const data = fs.readFileSync("test.txt",{encoding:"utf-8"});
console.log("Read synchronously : ",data)