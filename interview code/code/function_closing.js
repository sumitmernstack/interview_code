// Just like any Javascript IDE, which checks for all brackets are balanced or not. Similarly write a function that will check if the given string is having all the brackets are closed.

// Example:
// a.
// Input: "function sample (args) { const arr=[]; return arr; }"
// Output: TRUE
// b.
// Input: "function sample(args)) { const arr=[]; return arr; }"
// Output: FALSE
// c.
// Input: "function sample(args) { const arr=[]; return arr;"
// Output: FALSE
// d.
// Input: "function sample(args) { const arr=[[[]; return arr; }"
// Output: FALSE

let arr=["{","}", "(", ")", "[", "]"]
let str="function sample ( args) { const arr=[]; return arr; }"

function check_sym(arr,str){
    
    str=str.split("")
  
   let obj={};
   for(let i of str){
       obj[i]=(obj[i] || 0 )+1
   }
   
//   for(let i=0;i<arr.length;i++){
//       if(arr[i]== )
//   }

for (const j in obj){
    for(let i=0;i<arr.length;i++){
         if(j == arr[i]){
             console.log(obj[j],j)
             if()
         }
    }
   
}


    return obj
    
}

console.log(check_sym(arr,str))
