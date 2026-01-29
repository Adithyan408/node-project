import { Worker } from "worker_threads";

console.log(`Main thread Started`);

const worker = new Worker(new URL("worker.js", import.meta.url));
worker.postMessage("Process this message ");

worker.on("message", (msg) => {
    console.log("Message from Worker", msg)
});

worker.on("error", (err) =>{
    console.log("worker Error ", err);
});

worker.on("exit", (code) => {
    console.log(`Worker exited with code ${code}`);
})


