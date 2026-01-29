import {spawn} from 'child_process';

const ls = spawn("cmd.exe",["/c", "dir"]);

ls.stdout.on("data", (data) => {
    console.log(`Data : ${data}`);
});

ls.stderr.on("data", (data) => {
    console.error(`Error : ${data}`);
});

ls.on("close", (code) => {
    console.log(`Process Exited with code ${code}`);
})