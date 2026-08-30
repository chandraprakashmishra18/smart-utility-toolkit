// Basic HTTP server using the http core module
var http = require("http");
 
var server = http.createServer(function (req, res) {
  console.log("Request received for:", req.url);
 
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Node Server");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});
 
var PORT = 3000;
server.listen(PORT, function () {
  console.log("Server running at http://localhost:" + PORT);
});