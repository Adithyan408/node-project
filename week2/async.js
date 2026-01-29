import fs from "fs/promises";

async function getData(){
    try{
        let data = await fs.readFile("note.txt", "utf-8");
        console.log(data);
    } catch(err){
        console.log(err);
    }
}

getData();