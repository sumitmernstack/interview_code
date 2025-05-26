
// // const object = {
// //     who: 'World',

// //     greet() {
// //       return `Hello, ${this.who}!`;
// //     },

// //     farewell: () => {
// //       return `Goodbye, ${this.who}!`;
// //     }
// //   };

// //   console.log(object.greet());    World
// //   console.log(object.farewell()); //undefine

// //   //event driven archi.

// //  // Write a program to create a basic HTTP server using Node.js.

// //  let axios=require('axios')

// // let url="https://jsonplaceholder.typicode.com/todos"
// //  axios(url).then((result)=>{
// //     console.log(result)
// //  }).catch((error)=>{
// // console.log(error)
// //  })



// //Write a Node.js program to connect to MongoDB using Mongoose.
// //algo
// //import Mongoose
// //crete ob of Mongoose
// // let mongo=require("Mongoose") 
// // let connection= new mongo

// // let con=connection.connect()
// // con({
// //     url:"hhttps/atlas",
// //     username:"",
// //     password:"",
// //     port:""
// // },(result,err)=>{
// //     if(err){
// //         console.log('failed to connected,',err)
// //     }
// //     else{
// //         console.log('connected',result)
// //     }
// // })

// //Write a program to implement clustering in Node.js.

// // let cluster=require("cluster")
// // let os=require('os')

// // function createCluster(){

// //     for (let i = 0; i < array.length; i++) {
// //         const element = array[i];

// //     }
// // }
// // check os
// //creatre a loop
// // process id  or p.id()
// //create id depending upon cpu


let pro1=new Promise((resolve,reject)=>{
    let flag=true
if(flag){
    resolve("resolve 1")
}{
    reject("reject 1")
}
})

let pro2=new Promise((resolve,reject)=>{
    let flag=false
if(flag){
    resolve("resolve 2")
}{
    reject("reject 2")
}
})
let pro3=new Promise((resolve,reject)=>{
    let flag=true
if(flag){
    resolve("resolve 3")
}{
    reject("reject 3")
}
})

Promise.race([pro1,pro2,pro3]).then((result)=>{
console.log(result)
}).catch((err)=>{
    console.log(err)
})


// // 1:

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// });// this run sync

// promise1.then(() => {
//     console.log(3);
// });//run async

// console.log(4);

// // //4,3,1,success



// console.log('start')

// setTimeout(() => {
//     console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//     console.log('resolve')
// })

// setImmediate(() => {
//     console.log("setImmediate")
// })
// console.log('end')  //start, end, resolve, setImmediate, setTimeout

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]// 6>         1,9 ---> 5

function binarys(arr, targetele) {
arr=arr.sort((a,b)=>a-b)
//console.log(arr)
    let l = 0 
    let r = arr.length-1;

    while (r >= l) { // l=0,r=9    9>0
        let mid = Math.floor((l + r) / 2) // 4

        if (arr[mid] === targetele) {  //no
            return mid
        }
        if (targetele > arr[mid]) { // 9 >5, 0,10  --->5  ,6
            l=mid+1
        } else {
            r=mid-1
        }
    }
    return -1
}

console.log(binarys(array, 9))