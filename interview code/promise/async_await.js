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

async function runSteps() {
    await step1();
    await step2();
    await step3();
}

runSteps();


//binary search
let arr=[1,2,3,4,5,6,7,8,9]

function binaryserch(arr,ele){//7
    let r=arr.length-1
    let l=0;
    
    while(r>=l){
        let mid=Math.floor((r+l)/2)
        
        if(arr[mid]==ele){
            return mid
        }
        if(ele >arr[mid]){
            l=mid+1
            
        }else{
                r=mid-1
        }
    }
    return -1
}
console.log(binaryserch(arr,7))