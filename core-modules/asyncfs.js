const fs = require('fs')

// Read and write file asynchromously
const data = "Hello Async data !!"
fs.writeFile("asyncTest.txt",data,(err)=>{
    if(err) throw err;
    console.log("File written completed.")

    fs.readFile("asyncTest.txt",{encoding:"utf-8"},(err,data)=>{
        if(err) throw err;
        console.log("Readfile async : ",data)
    })
})
console.log("File writing in process ....")

