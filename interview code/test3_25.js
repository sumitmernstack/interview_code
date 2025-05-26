// [1, 5, 7, 2, 5, 7, 9, 12, 22, 7]
// return a new array with numbers which are repeated in array

function dub(arr) {
    let res = []
    let obj = {}
    for (const element of arr) {
   
        obj[element] = (obj[element] || 0) + 1
    }
    //return obj
    let resp = Object.keys(obj).filter((x) => obj[x] >= 1)
 
return resp
}
console.log(dub([1, 5, 7, 2, 5, 7, 9, 12, 22, 7]))