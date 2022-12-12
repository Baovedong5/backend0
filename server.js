const http = require("http"); // sử dụng đc do cài đặt node.js

const hostname = "localhost"; // = vs localhost
const port = 6969;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n with Phuong");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
