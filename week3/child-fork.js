import {fork} from 'child_process';

const child = fork(new URL("./woker-child.js", import.meta.url));

child.send({number : 10});

child.on("message", (msg) => {
    console.log("Message from Child", msg); 
})