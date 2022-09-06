const fs = require('fs')

let readstream = fs.createReadStream('./content.txt',{encoding:'utf-8'});
let writestream = fs.createWriteStream("./write.txt",{encoding:'utf-8'});

readstream.on('error',(err)=>{
    console.log('ERR',err.message);
})
readstream.on('close',()=>{
    console.log("Read Completed");
})
readstream.on('data',(chunk)=>{
    console.log("-----new chunk----");
    writestream.write("---New Chunk---")
    writestream.write(chunk);
})