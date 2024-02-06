const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<h1>Welcome to our home page</h1>`);
    res.end();
  }else if (req.url === "/about") {
    res.write("Here is our short history");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
