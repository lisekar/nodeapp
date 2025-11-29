const mongoose = require("mongoose");

// sample promise data - to fetch data
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true;  // Change to false to test reject

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Failed to fetch data.");
      }
    }, 1000);
  });
}

mongoose.connect("mongodb://localhost:27017/userdb")
.then(()=>{
    console.log("Database connected !!")
})
.catch((err)=>{
    console.log("DB Connection error !")
})