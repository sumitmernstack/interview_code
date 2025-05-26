const fs=require('fs')

let stream=fs.createWriteStream('example2.txt',{encoding:'utf8'})
//, { encoding: 'utf8' });
stream.write('line 1 writing')
stream.write('line 2 writing')
stream.write('line 2 ksjdhgkfjwriting')
stream.end("end",()=>{
    console.log("file writing done")
})
let streamread=fs.createReadStream('example2.txt',{encoding:'utf8'})

streamread.on('data',(chunk)=>{
    console.log(chunk)
})
