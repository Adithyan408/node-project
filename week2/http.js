import http from 'http';

const server = http.createServer((req, res) => {
    const {url , method} = req;
    res.writeHead('200',{'content-type' : 'application/json'});

    if(url ==='/user' && method === 'GET'){
        res.end(JSON.stringify([{id: 1, name : "Adithyan"}]));
    } else if(url === '/user' && method === 'POST'){
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const newUser = JSON.parse(body);
            res.end(JSON.stringify({messagae : "User Created", user : newUser})) 
        });
    } else if(url.startsWith("/user/") && method === 'PUT'){
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const id = url.split('/')[2];
            const updatedUser = JSON.parse(body);
            res.end(JSON.stringify([{message : `User ${id} updated`, user : updatedUser}]))
        })

    }
})




server.listen(3000, () => {
    console.log("Running on http://localhost:3000");
    
})