import fs from 'fs/promises';
import { resolve } from 'path';

const promise1 = Promise.resolve("First Promise");
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second Proomise")
    }, 1000)
});
const promise3 = fs.readFile("note.txt","utf8");

Promise.all([promise1, promise2, promise3])
.then((val) => console.log("Promise.all Method ",val))
.catch((err) => console.log(err))


Promise.allSettled([promise1, promise2, promise3])
.then((val) => console.log("All settled Methoid ", val))
.catch((err) => console.log(err))

Promise.race([promise1, promise2, promise3])
.then((val) => console.log("Race method "+val))
.catch((err) => console.log(err))