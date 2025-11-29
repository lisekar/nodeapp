const http = require("http");
const path = require("path");
const fs = require("fs");

// Create server and server routing - without express framework. - basic method we create server host with this steps
const server = http.createServer((req, res) => {
  // console.log(req.url)
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "application/json" }); // also we can give === content type : text/plain
    res.end("Home page !!");
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "application/json" }); // also we can give === content type : text/plain
    res.end("About page !!");
  } else if (req.url == "/file") {
    const readstream = fs.createReadStream("./samplevideo.mp4");

    res.writeHead(200, { "content-type": "video/mp4" }); // also we can give === content type : text/plain
    readstream.pipe(res);
    // res.end()
  } else {
    res.writeHead(404, { "content-type": "application/json" }); // also we can give === content type : text/plain
    res.end("400 page not found !");
  }
  //   res.writeHead(200, { "content-type": "application/json" }); // also we can give === content type : text/plain
  //   res.end("Hello node js server !!");
  // res.end(`{'name' : 'livi'}`)
});

server.listen(5001, () => {
  console.log("Server Listening http://localhost:5001");
});
