// const http = require('http');
import http from 'http'

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Node.js");
});

server.listen(3000, () => {
    console.log("Server is Running on port http://localhost:3000");
    
})