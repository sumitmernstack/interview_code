const fs=require('fs')

const read=fs.createReadStream('example.txt',{ encoding: 'utf8' })

// read.on('reading',(data)=>{
//     console.log(data)
// })
// read.on('end',()=>{
//     console.log('filew reading done')
//     })

    
read.on('data',(chunk)=>{
    console.log(chunk)
    })
    
    read.on('end',()=>{
        console.log('filew reading done')
        })
    

// const write=fs.createWriteStream('example2.txt')

// read.pipe(write)