//var
//1)it is function scope
//2)it can be declare and value can be updated
//3)it can be declare like 
var a=10;
var a=4999
//4)in case of hoisting, it return undefine. memory is pointing to global scope.

console.log(x)
var x=10

/*** *********************************************************************************/

//let
//1) it is block scope
//2)it can be declare and value can be updated
//3)it can't be declare like
let a=10;
let a=4999
//4) in case of hoisting, we get ReferenceError 
// it is in temporal dead zone , BASICALLY THEY POINT SOME DIFFRENT MEMORY LOCATION I.E SCRIPT MEMORY


/*** *********************************************************************************/

//const
//1)it is block scope
//2)it can be declare and but value can not be updated
//3)it can't be declare like
const a=10;
const a=4999
//4) in case of hoisting, we get ReferenceError
// it is in temporal dead zone 