import url from 'url';

const urlString = 'http://www.google.com/search?q=hello+world';

//URL object
const urlObj = new URL(urlString);

console.log(urlObj);


//format()
console.log("formatted",url.format(urlObj));


//import.meta.url
console.log("Meta", import.meta .url);
