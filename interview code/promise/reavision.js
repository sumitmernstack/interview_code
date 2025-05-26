//callback
function parent1(name, callback) {
    console.log("parent fun", name)
    callback()
}

function child(name, callback) {
    console.log("child fun", name)
    callback()
}

function child2() {
    console.log("child fun nest",)

}
// parent1("sumit", () => {
//     child('kesahri', () => {
//         child2()
//     })
// })

//promise


function pro1() {
    return new Promise((resolve, reject) => {
        if (true) {   console.log("step1")
            resolve("resolve1") }
    })
}

function pro2() {
    return new Promise((resolve, reject) => {
        if (true) {   console.log("step2")
            resolve("resolve2") }
    })
}
function pro3() {
    return new Promise((resolve, reject) => {
        if (true) {  console.log("step3")
             resolve("resolve3") }
    })
}

// pro1().then((d1) => {
//     console.log("-------")
//     console.log(d1)
//     pro2()
// }).then((d2)=>{
//     console.log("-------")
//     console.log(d2)
//     pro3()
// })

// let prpro=new Promise((resolve, reject) => {
//     if (true) {  console.log("step3")
//          resolve("resolve3") }
//         else{

//         }
// })
// // prpro.then((result)=>{
// //     console.log(result)
// // })

async function promo() {
    await pro1()
    await pro2()
    await pro3()
}
promo()