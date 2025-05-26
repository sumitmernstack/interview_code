
// /**
//  * when we want to attach any function with object, so that we can reuse it and its feature
//  */

const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  


let teacher={
    name:"golu",
    lastname:"keshari",
    age:"29",
    fullName: function () {
        return this.firstName + " " + this.lastName;
      }
}

console.log(teacher.fullName.apply(member))

function getSubject(sub1,sub2) {
    return `${sub1} , ${sub2}`
}


console.log(getSubject.call(teacher,"math","english")) //-->call take any type of parameter
// console.log(getSubject.apply(teacher,["math","english"]))//-->apply take only array as parameter

//console.log(teacher.fullName.bind(member)) 
let result=teacher.fullName.bind(member)
console.log(result())
// /**
//  * ye function bana ke rakh dega but call nhe kare ga
//  * agar kabhi bd me jarat hoga tb use kare ge isko
// the bind() , an object can borrow a method from another object.

//  */




// console.log(!'Me')
 
// false
 
// console.log((0 || 1));

// console.log((1 || 2));

// console.log((0 && 1));

// console.log((1 && 2));
 
// 1
// 2
// 0
// 1
 
// function funcTwo () {

//   if(true) {

//   var a = 10;

//   let b = 20

//   }

//    console.log(a);

//    console.log(b);

// }
// funcTwo();
 
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
 

const student={
  f:"sumit",
  l:"kesahri",
  age:"27",
  fullname1:function () {
    return  `${this.f},${this.l}`
  }
}

const student2={
  f:"pummy",
  l:"kesahri",
  age:"27"
}

function getSubject1(a,b) {
  return `${a},${b}`
}
console.log('--->',getSubject1.call(student2,"math","english"))
console.log("---->",student.fullname1.call(student2))

// // let result=teacher.fullName.bind(member)
// // console.log(result())
// //bind
// let res_bind=student.fullname.bind(student2)

// console.log(res_bind)
// console.log(res_bind())

// function subject(sub1,sub2) {
//   return `${sub1},${sub2}`
// }
// let res_call=subject.call(student,"math",'computer')

// console.log(res_call)

// let res_apply=subject.apply(student,["math",'computer'])

// console.log(res_apply)
