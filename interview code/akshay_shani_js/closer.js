function a() {
    let a = 10
    function b() {
        console.log(a)
    }
    a = 200
    return b
}
// let z=a()
// //the function  z contain function b now.  i.e --->[Function: b]
// //so z outside the scope, but still it can access varible a, because of closer.
//z()
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

//closer

//function along with its lexical scope they are bundle together they form closer.

function par() {
    let str = "sumit"
    function ch() {
        console.log(str)
    }
    return ch
}

const ret = par()
//console.log(ret)
console.log(ret())

function loop() {

    for (var i = 0; i < 5; i++) {
        function closer(i) {


            setTimeout(() => { console.log(i) }, 1000 * i)
       }
       closer(i)
    }


}

loop()