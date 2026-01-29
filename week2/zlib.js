import zlib from "zlib";

const input = "This is going to compress using gzib".repeat(100);

zlib.gzip(input,(err, compressed) => {
    if(err){
        console.error("Compression error" , err);
    }

    console.log('Original Size: ',input.length);
    console.log('Compressed Size: ',compressed.length);
    


zlib.gunzip(compressed, (err, decompressed) => {
    if(err){
        console.error("Decompression error", err);
    }
    console.log("Decompressed :", decompressed.length);
    console.log(input === decompressed.toString())
    
})
});

