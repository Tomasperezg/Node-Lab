const http = require("http");
let q = require("./script.js");
let quotes = [Math.floor(Math.random()*4)];
console.log(q.qs(quotes));

http.createServer((request, response) => {
response.writeHead(200, { "Content-type": "text/plain" });
response.write("sup, World!");
response.write(q.qs(quotes));
response.end();
}).listen(3000);
