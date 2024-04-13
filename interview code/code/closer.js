//function along with its lexical scope are bundel together are called closer
function a() {
    let a=5;
    function b() {
    console.log(a)
    }
    a=9000    ///---> funtion rebember its referance where it was pointing...,so printing 9000
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