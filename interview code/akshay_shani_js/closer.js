// function a() {
//     let a=10
//     function b() {
//         console.log(a)
//     }
//     a=200
//   return  b
// }
// let z=a()
// //the function  z contain function b now.  i.e --->[Function: b]
// //so z outside the scope, but still it can access varible a, because of closer.
// z()
// //basicall it still rebember the referance where it was pointing.


function par() {
    let a = 10;
    function child() {
        console.log(a)
    }
    return child
}
let z = par()
z()