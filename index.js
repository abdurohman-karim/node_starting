const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const filePath = path.join(__dirname, "templates", "index.html");
    if(req.url === "/") {
      fs.readFile(filePath, (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      });
    }
  } else if (req.method === "POST") {
    const email = [];

    req.on("data", (data) => {
      email.push(Buffer.from(data));
    });
    req.on("end", () => {
      const message = email.toString().split("=")[1];
      res.end(`Thanks for your message! ${message}`);
    });
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
