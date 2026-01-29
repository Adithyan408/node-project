import e from "express";
import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  const cp = os.cpus().length;
  for (let i = 0; i < cp; i++) {
    cluster.fork();
  }
} else {
  const app = e();
  app.get("/", (req, res) => {
    res.send("Hello from Worker");
  });
  app.listen(5050, () => {
    console.log(`${process.pid} started `);
  });
}
