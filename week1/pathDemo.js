import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const fileName = __filename

//BaseName 
console.log(path.basename(fileName));

//DirName
console.log(path.dirname(fileName));

//Extended Name 
console.log(path.extname(fileName));

//PArse()
console.log(path.parse(fileName));

//join

//Resolve