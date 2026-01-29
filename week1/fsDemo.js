// import fs from 'fs';
import fs from "fs/promises";
import path from "path";
import url from "url";

// fs.readFile('./test.txt','utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);

// });

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, "/test.txt");

// const data = fs.readFileSync(file, 'utf8');
// console.log(data);

// fs.readFile(file, 'utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// const readFile = async() => {
//     try{
//         const data = await fs.readFile(file, 'utf8');
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

//Write File
const writeFile = async() => {
    try{
        await fs.writeFile(file, "Thhis is written by me");
        console.log("Writing ");

    }
    catch(err){
        console.log(err);
    }

}

//Append
const appendFile = async () => {
  try {
    await fs.appendFile(file, "\n This is Appended");
    console.log("Runnning");
  } catch (error) {
    console.log(error);
  }
};


const reaFile = async () => {
  try {
    const readed = await fs.readFile(file, "utf8");
    console.log(readed);
  } catch (error) {
    console.log(error);
  }
};

writeFile();
reaFile();
appendFile();
// readFile();
