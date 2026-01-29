// worker.mjs
import { parentPort } from "worker_threads";

parentPort.on("message", (msg) => {
  console.log(msg);
})

// Do some heavy calculation
let sum = 0;
for (let i = 0; i < 1e7; i++) {
  sum += i;
}
// console.log(sum)

// Send result back to main
parentPort.postMessage(`Sum is ${sum}`);
