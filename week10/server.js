import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/plain');

    if(req.url === "/"){
        res.statusCode = 200;
        res.end("Success");
    } else if(req.url === "/about"){
        res.statusCode = 200;
        res.end("About Page ");
    } else {
        res.statusCode = 404;
        res.end("Not found")
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Running");
    
})