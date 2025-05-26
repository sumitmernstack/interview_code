 //sum of no using promise

 let flag = true;

 function sum(arr) {
     console.log(...arr)
  return    new Promise((resolve, reject) => {
 
         if (arr) {
             let res=0
             for (let i = 0; i < arr.length; i++) {
                  res+= arr[i];
                 
             }
             resolve(res)
         } else {
             reject("no is missing")
         }
     })
 }
 
 
 sum([1,2,3,8,4,5]).then((res)=>{console.log(res)}).catch((err)=>{
 console.log(err)
 })