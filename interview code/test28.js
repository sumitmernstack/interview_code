let express = require('express')
let app = express()
let jwt = require('jsonwebtoken')
let secret = "qwertyui"

// let user_access = [
//     {
//         role: 'admin',
//         access: ['edit', 'read', 'write', 'delete']
//     },
//     {
//         role: 'user',
//         access: ['read']
//     }

// ]
app.get('/test', (req, res) => {
    res.send("api is working")
})

app.get('/generatetoken', (req, res) => {
    let token = jwt.sign({
        id: 1,
        role: 'admin',
        access: ['edit', 'read', 'write', 'delete']
    }, secret
    )
    console.log(token)
    return res.send(`token generated`)
})
function isAdmin(req, res, next) {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiYWNjZXNzIjpbImVkaXQiLCJyZWFkIiwid3JpdGUiLCJkZWxldGUiXSwiaWF0IjoxNzQzMTQxMzc5fQ.qWMEWaCNAzlP8CqnPiZ0ZGRtJuy6ffEBJVRLc9MhPGo'

    console.log(token)
    let user_data = jwt.verify(token, secret)
    if (!user_data) {
        return res.send("invalid token")
    }

    if (user_data.role === "admin") {
        console.log("user have role for------>", `${user_data.access}`)
        next()

    } else {
        console.log("access denied")
    }

}
//isAdmin()

function login(req, res) {
    res.send('user is on dash board')

}

app.get("/checkuser", isAdmin, login)


// app.listen(3000, () => {
//     console.log('server running on 3000')
// })
//----------------------------------------------------------------------------
// // cluster-setup.js
// const cluster = require('cluster');
// const http = require('http');
// const os = require('os');

// const numCPUs = os.cpus().length;
// console.log("-------->", numCPUs)
// if (cluster.isMaster) {
//     console.log(`Master ${process.pid} is running`);

//     // Fork workers
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }

//     // Listen for dying workers
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died. Starting a new one...`);
//         cluster.fork(); // Replace the dead worker
//     });

// } else {
//     // Workers can share any TCP connection
//     // In this case, an HTTP server
//     http.createServer((req, res) => {
//         res.writeHead(200);
//         res.end(`Handled by worker ${process.pid}\n`);
//     }).listen(3000);

//     console.log(`Worker ${process.pid} started`);
// }

//high order function
//two pointer
let two = [2, 3, 7, 8, 9]

function twopt(arr, targetsum) { //9
    let l = 0;
    let r = arr.length - 1

    while (r > l) {
        let sum = arr[l] + arr[r]

        if (targetsum == sum) {
            return `${l},${r}`
        }
        if (targetsum > sum) {
            l++;
        } else {
            r--
        }
    }
    return -1
}

console.log(twopt(two, 9))


let a = [3, 8, 16, 20, 25];
let b = [4, 10, 12, 22, 23];
let c = [];

function merge(a, b) {
    let m = a.length;
    let n = b.length;
    let i = 0
    let j = 0;
    let k = 0;
    while (m > i && n > j) {
        if (a[i] > b[j]) {
            j++

        } else if (a[i] < b[j]) {

            i++

        } else {
            c[k] = a[i]
            i++
            j++
            k++

        }
    }
    // while(m>i){
    //     c[k] = a[i]
    //     i++
    //     k++
    // }
    // while(n>j){
    //     c[k] = b[j]
    //     j++
    //     k++
    // }

    return c
}
console.log(merge(a, b))

let arr_emp = [
    {
        id: 1,
        name: "sk",
        dept_id: 101
    },
    {
        id: 2,
        name: "ak",
        dept_id: 102
    }
]

let arr_dept = [
    {
        dept_id: 101,
        dept_name: "it"
    },
    {
        dept_id: 102,
        dept_name: "hf"
    }

]

function name(arr1, arr2) {
let tmp=[]
    arr1.filter((x) => {
      //  console.log(x)
        arr2.find((y) => {
            if (x.dept_id == y.dept_id) {
                let obj = {
                    id: x.id,
                    name: x.name,
                    dept_id: x.dept_id,
                    dept_name: y.dept_name
                }
                tmp.push(obj)

            }
        })
    })

    return tmp
}

console.log(name(arr_emp,arr_dept))
