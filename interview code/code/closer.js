//function along with its lexical scope are bundel together are called closer
function a() {
    let a=5;
    function b() {
    console.log(a)
  //  a=9000 
    }
   a=9000    // // Updating `a` before returning `b`
   // ///---> funtion rebember its referance where it was pointing...,so printing 9000
   return b

}
let z=a()
console.log(z)
z()





// here we can see even function a() is vanished from the execution context , but the function b() 
//still remberber the where it was pointing.

function d(){
for (var i = 0; i <=5; i++) {
 function name(i) {
    setTimeout(()=>{
        console.log(i)
    },i*1000)
 }
    name(i)
    
}
}
d()


// function along with its lexical scope they are bundled together they formed closer,
//even if parent function got finished the inner function still rebember where the varible is pointing.

function closerParent() {
  let a=910;
  function closerChild() {
    console.log(a)
    
  }
  return closerChild
}

let closer=closerParent()
closer()