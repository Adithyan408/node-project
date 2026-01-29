import fs from 'fs/promises';



const writeFile = async () =>{
    try {
        await fs.writeFile("new.txt","Its a new file")
        console.log("writing");
    } catch (error) {
        console.log(error);
    }
}
const append = async () => {
    try {
        await fs.appendFile('new.txt',"This is Appended later",'utf8');
        console.log("Appendeing");
        
    } catch (error) {
        console.log(error);
    }
}
const readFile = async () => {
    try {
        const readed  = await fs.readFile('new.txt','utf8');
        console.log(readed);
    } catch (error) {
        console.log(error);
    }
}

// writeFile();
append()
readFile()