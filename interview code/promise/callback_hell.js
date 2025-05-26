function step1(callback) {
    console.log("step1")
    callback()
}

function step2(callback) {
    console.log("step2")
    callback()
}

function step3() {
    console.log("step3")
    
}

step1(()=>{
    step2(()=>{
        step3()
    })
})