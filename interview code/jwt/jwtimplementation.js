const express = require('express')
const app = express()
var jwt = require('jsonwebtoken');
let port = 9000
let secret = "qwerty"
app.get('/', (req, res) => {
    res.send("hellow")
})

let role_obj = [{
    role: "admin"
},
{ role: "user" }
]
app.get('/cretaeToken', (res, req) => {
    let toke = jwt.sign({ name: "sumit", age: 21, role: "user" }, secret)
    console.log(toke)
    return toke

})

app.get('/verifytoken', (res, req) => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VtaXQiLCJhZ2UiOjIxLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDI2NTEyNjZ9.UnljaBh-aG4wl16awRN_jo23GQapAnY5V4G-AqOSKp0"
    let toke = jwt.verify(token, secret)
    console.log(toke)
    return toke
})

function isadmin(req, res, next) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VtaXQiLCJhZ2UiOjIxLCJyb2xlIjoidXNlciIsImlhdCI6MTc0MjY1MzUwMH0.JJtx4oknOX1t1V5vopJNT_KfSatw0hnNNTBvNCyQO08"
    let toke = jwt.verify(token, secret)
    if (token) {       
        if(toke.role!=="admin"){
            res.send("no access")
        }
    }
    next()

}
//ishaveAccess()
function dashboard() {
    let obj=["home","about","payment"]
    console.log(obj)
    return obj
}

app.get("/adsh",isadmin,dashboard,(req,res)=>{
res.send("check in console")
return 'no access'
})

app.listen(port, () => {
    console.log('serve started')
})