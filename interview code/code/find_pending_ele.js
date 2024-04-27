const inputArray = [5, 3, 8, 10, 14, 7, 15, 17, 12];

function sort_find_ele(arr){

    arr.sort((a,b)=>{return a-b})
    console.log(arr)
let tmp=[]
    for (let i = 0; i < arr.length; i++) {
       // console.log(i)
        const right=arr[i]
        const left=arr[i+1]
        
        for (let j = right+1; j < left; j++) {
            tmp.push(j)
            
        }
        
    }
  //  console.log(tmp)

return tmp
}

console.log(sort_find_ele(inputArray))