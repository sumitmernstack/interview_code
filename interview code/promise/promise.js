function step1() {
    return new Promise((resolve) => {
        console.log("step1")
        resolve()
    })
}

function step2() {
    return new Promise((resolve) => {
        console.log("step2")
        resolve()
    })
}

function step3() {
    return new Promise((resolve) => {
        console.log("step3")
        resolve()
    })
}

step1()
    .then(() => step2())
    .then(() => step3())


function p() {
    return new Promise((resolve, reject) => {
        resolve("p1")
    })
}

function p1() {
    return new Promise((resolve, reject) => {
        resolve("p2")
    })
}
function p2() {
    return new Promise((resolve, reject) => {
        resolve("p3")
    })
}

async function a(){
let val1=await p()
let val2=await p1()
let val3=await p2()
console.log(val1,val2,val3)
}
a()

// p().then((result)=>{console.log(result)
//     return p1()
// }).
// then((result)=>{
//     console.log(result)
//     return p2()
// })
// .then((result)=>{
//     console.log(result)

// })

let pro=new Promise((resolve,reject)=>{
    let res=0
    let array=[1,2,3,4,5,6,7,8,9,10]
    if(false){
        for (let i = 0; i < array.length; i++) {
            res = res+array[i];
            
        }
        resolve(res)
    }else{
        reject('sum is zero')
    }
})
pro.then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})