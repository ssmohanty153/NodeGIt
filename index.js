const http = require("http");
const port = 5000;
const hostName = "127.0.0.1";
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world");
  })
  .listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
  });

