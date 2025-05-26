

console.log(!'Me') // ---> false
 


function funcTwo () {

  if(true) {

  var a = 10;

  let b = 20

  }

   console.log(a);

   console.log(b);  

}
funcTwo();
 
// console.log(a); //undefine

//    console.log(b) //referance err
 
// var a = 21;
 
// (() => {

//   console.log(a);

//   var a = 25

//   console.log(a);

// })();
 
// //undefine
// // 25
 
// (function Print(){

//   console.log('decode')

// })()
 
// Print()
 
// const result = sum(20, 50)

// console.log(result)
 
 
// function sum(num1, num2) {

//   return num1 + num2

// }
 
// const result = sum(20, 50)

// console.log(result)
 
// const sum = function (num1, num2) {

//   return num1 + num2

// }
 
// const funcOne = () =>

//   console.log("Hello there");

// const funcTwo = (func) => func();

// funcTwo(funcOne);
 
// for(var i = 1; i < 6; i++) {

//   setTimeout(function() {

//      console.log(i);

//   },1000);

// }

// console.log('The loop is done!');
 
// 6,6,6,6,6
// 1000
 
// var i
 
 
 
// every element i =same memory
// i=6
 
// for(var i = 1; i < 6; i++) {
//   console.log(i)

//   setTimeout(function() {

//      console.log(i);

//   },1000);

// }

// console.log('The loop is done!');
 
// The loop is done
 
 
// 1,2,3,4,5
// 66666
 
// for (let i = 0; i < 3; i++) {

//   setTimeout(() => console.log(i), 1);

// }
 
// function addOne (i){

//     return i+1;

// };
 
// var a = [ 0,1,2];

// b = a.forEach(addOne);

// c = a.map(addOne);

// console.log(b);

// console.log(c);
 
// c-->1,2,3
// b-->1,2,3
 
