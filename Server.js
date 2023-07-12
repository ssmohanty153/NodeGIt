const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const port = 5000;
const hostName = "127.0.0.1";

const mimeTypes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
  json:"application/json",
};

http
  .createServer((req, res) => {
    let myUrl = url.parse(req.url).pathname;
    let fileName = path.join(process.cwd(), unescape(myUrl));
    console.log(` file is ${fileName}`);
    let loadFile;
    try {
      loadFile = fs.lstatSync(fileName);
    } catch (error) {
      console.log("file not exit");
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 page not found");
      res.end();
      return;
    }
    if (loadFile.isFile()) {
      let mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
      res.writeHead(200, { "Content-Type": mimeType });
      let fileStraem = fs.createReadStream(fileName);
      fileStraem.pipe(res);
    } else if (loadFile.isDirectory()) {
      res.writeHead(200, { "Content-Type": "index.html" });
      res.end();
    } else {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("500 internal error");
      res.end();
    }
  })
  .listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
  });
