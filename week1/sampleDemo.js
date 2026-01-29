import {writeFile, readFile, appendFile, unlink} from 'fs/promises'

async function operation(){
    try{
        await writeFile('note.txt', "This is a page build on Node", 'utf-8');
        console.log("Notes created");
        
        let data = await readFile('note.txt', 'utf-8');
        console.log(data);

        await appendFile('note.txt', "i have appended this on NOde.js ", 'utf-8');
        console.log("Modified");

        let apd = await readFile('note.txt', 'utf-8');
        console.log(apd);
        
    } catch(err){
        console.log(err);
        
    }
}

operation();