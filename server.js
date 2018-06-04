const http = require("http");
http.createServer((request, response) => {
response.writeHead(200, { "Content-type": "text/plain" });
response.write("sup, World");
response.end();
}).listen(3000);
