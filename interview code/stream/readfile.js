
const fs=require("fs")

const stream=fs.createReadStream('example.txt',{ encoding: 'utf8' })

stream.on('data',(chunk)=>{
console.log(chunk)
})

stream.on('end',()=>{
    console.log('filew reading done')
    })

stream.on('err',(error)=>{
    console.log(error)
    })