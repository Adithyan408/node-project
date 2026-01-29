import fsp from 'fs/promises'
import fs from 'fs'



console.log('This runs First...!!');
fs.writeFile('note.txt',"This is Written using the file write method ", (err) => {
    if(err){
        console.log("New error", err);
        return;
    }
    console.log("File had written");
    
});

fs.readFile('note.txt','utf8', ( err,data) => {
    console.log("Content : ", data);
});

setImmediate(() => {
    console.log("This is the Immediate ");    
});

async function man(){
    try{
        const data = await fsp.readFile('note.txt','utf8');
        console.log("This is the promised content", data)
        // return data
    } catch(err){
        console.log(err);
        
    }
}

console.log("This is last log")
man();