
import fs from 'fs';

const writable = fs.createWriteStream("output.txt", 'utf8'); //Created a file 

writable.write("Hello"); //Written tho the new file 
writable.end();

writable.on("finish", () => {
    console.log("Finished  writing");
});

const stream = fs.createReadStream('output.txt', 'utf8', (err, data) => {
    console.log(data);
    
}); // Readed the file 

stream.on("data", (chunk) => {
    console.log("New chunk\n", chunk); //Showing the content of the file 
});


stream.on("end", () => {
    console.log("Finished Reading");
});

