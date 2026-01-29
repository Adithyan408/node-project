import {exec} from 'child_process';

exec("node -v", (err, stdout, stderr) => {
    if(err){
        console.error("Error: ", err.message);
        return;
    }
    if(stderr){
        console.error("stderr:", stderr);
        return;
    }
    console.log("Node Version: ", stdout.trim());
})