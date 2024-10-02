//read
const fs = require("fs")
let path = "/path"
let content = ""
let readstream = fs.createReadStream(path)

readstream.on(data, (chunk) => {
    content = content+ chunk
    console.log(content)
})

readstream.on(end,()=>{
    console.log(content)
    console.log("no more datra to read")
})

//write
const fs = require("fs")
let data="my name is sumit kesahri"

let writestream=fs.write(path)
writestream.write(str,"uft-8")

writestream.end()

writestream.on(end,()=>{
   
    console.log("no more datra to write")
})
