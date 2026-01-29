import os from 'os';

//UserInfo
console.log(os.userInfo());

//totalmem
console.log(os.totalmem());

//freemem
let frr =(os.freemem());
console.log(frr);

const gigabytes = frr / Math.pow(1024, 3);
console.log(gigabytes,"GB")

//cpus
console.log(os.cpus());

console.log(os.hostname);



