import cluster from "cluster";
import os from "os";
import e from "express";

if (cluster.isPrimary) {
  const numCpu = os.cpus().length;
  console.log(`Primary process is Running in ${process.pid}`);
  console.log(`Forking ${numCpu} workers...`);

  for (let i = 0; i < numCpu; i++) {
    cluster.fork();
  }

  cluster.on("exit", (Worker) => {
    console.log(`Worker  ${Worker.process.pid} died.  Restarting...`);
    cluster.fork();
  });
  
} else {
  const app = e();

  app.get("/", (req, res) => {
    res.send(`Hello from worker ${process.pid}`);
  });

  app.listen(3030, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
