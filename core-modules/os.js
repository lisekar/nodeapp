const os = require("os");

console.log("paltform : ", os.platform());      // Get platform name
console.log("Architecture : ", os.arch());      // get system architecture
console.log("Total memory : ", Math.round(os.totalmem() / 1024 ** 3), "GB"); // get RAM memory
console.log("Free memory : ", Math.round(os.freemem() / 1024 ** 3), "GB"); // get RAM free memory
console.log("Home directory : ", os.homedir()); // get Home directory
console.log("CPU cores : ", os.cpus().length); // get CPU core
console.log(" OS uptime : ", os.uptime() / 60 / 60); // get OS uptime in hrs.
