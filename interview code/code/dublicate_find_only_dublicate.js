let arr=[1,2,3,4,5,6,1,2,3,4,5,6,5,55,33,66]

function unique(arr){
    let tmp=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++)
        if(arr[i]==arr[j] && !tmp.includes(arr[i]) ){
            tmp.push(arr[i])
        }
    }
    return tmp
}

console.log(unique(arr))