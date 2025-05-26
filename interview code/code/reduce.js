let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//sum of an array
let a = arr.reduce((acc, curr) => {
   return acc += curr
}, 0)
console.log(a)
//find max value
let b = arr.reduce((acc, curr) => {
   if (curr > acc) {
      acc = curr
   }
   return acc
}, 0)

console.log(b)

const people = [
   { last_name: 'Doe', age: 25 },
   { last_name: 'Smith', age: 30 },
   { last_name: 'Johnson', age: 40 },
   { last_name: 'Williams', age: 30 },
   { last_name: 'Brown', age: 45 }
];

console.log(people);

let c = people.reduce((acc, curr) => {
   acc[curr.age] = (acc[curr.age] || 0) + 1
   return acc
}, {})
console.log(c);


let numbers = ["alex", "bob", "cary", "alex"];

function red_sum(arr) {
   let val = arr.reduce((acc, cur) => {
      return acc = acc + cur
   }, 0)
   return val
}
console.log(red_sum(numbers))



function find_occ(arr) {
   let val = arr.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1
      return acc
   }, {})
   return val
}
console.log(find_occ(people))

// //[1,2,3,4,5,6]

// function rotate(arr, times) {
//    for (let i = 0; i < times; i++) {
//       let lastele = arr[arr.length - 1]
//       console.log(lastele)
//       for (let j = arr.length - 1; j > 0; j--) {
//          arr[j] = arr[j - 1]
//       }
//       arr[0] = lastele

//    }
//    return arr
// }
// //console.log(rotate([1,2,3,4,5,6],3))

// function del(arr, index) {

//    for (let i = index; i < arr.length; i++) {
//       arr[i] = arr[i + 1]
//    }
//    arr.length--;
//    return arr
// }
// //console.log(del([1, 2, 3, 4, 5, 6], 3))
// //[1, 2, 3,  5, 6]
// function insert(arr, index, element) {
//    for (let i = index; i <arr.length; i--) {
       
//       arr[i + 1] = arr[i]
// index--
//    }
//    arr[index] = element
//    return arr
// }
// console.log(insert([1, 2, 3, 5, 6], 3, 4))