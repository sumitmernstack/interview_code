
//id   role         permission
//1    admin        read write delete
//2     editor      read write
//3     reader      write


const checkpermission = (permission) => {
    (req, res, next) => {
//take the token
//decode the user id of the user
//check the role
//check its permission 
// if permission is passed in the param is same as in db 
       
        next()
    }
}



//header: beare token
app.post("/post", checkpermission, (req, res) => { // admin
    res.send("have access")
})