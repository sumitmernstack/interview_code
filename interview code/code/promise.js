const promise=new Promise((resolve,reject)=>{
  let flag=false;
  if(flag){
      resolve("success")
  }else{
      reject("failed")
  }
})

promise.then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})