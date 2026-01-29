import cluster from "cluster";
import os from 'os';
import http from 'http';

if(cluster.isPrimary){
    console.log(`Primary process ${process.pid} is Running`);
    
    const numsCPU = os.cpus().length;
    console.log(numsCPU);

    for(let i = 0; i < numsCPU; i++){
        cluster.fork();
    }

    cluster.on("exit", (worker) => {
        console.log(`Worker ${worker.process.pid} died, restarting...`);
        cluster.fork();
    });
} else {
    http.createServer((req, res) => {
        if(req.url === '/'){
            res.writeHead(200, {"Content-Type" : "text/plain"});
            res.end(`Hello from worker ${process.pid}\n`);
        }else{
            res.writeHead(404,{"Content-Type" : "text/plain"});
            res.end("Not available")
        }
    }).listen(3000);
    console.log(`worker process ${process.pid} started`);
    
}