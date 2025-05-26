function step1(callback) {
    console.log("step 1")
    callback()
}

function step2() {
    console.log("step 2")
}

//calling way 1
step1(step2)

//calling way 2
step1(()=>{
    step2()
})