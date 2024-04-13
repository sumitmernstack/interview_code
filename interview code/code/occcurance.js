function countOccurance(str) {
  const cntObj = {};
  for (const iterator of str) {
    //  cntObj[iterator]
    cntObj[iterator] = (cntObj[iterator] || 0) + 1
  }
  return cntObj;

}

const res = countOccurance("hellow")
//console.log(res)


//using reduce

const people = [
  { last_name: 'Doe', age: 25 },
  { last_name: 'Smith', age: 30 },
  { last_name: 'Johnson', age: 40 },
  { last_name: 'Williams', age: 35 },
  { last_name: 'Brown', age: 45 }
];

//console.log(people);

let c = people.reduce((acc, curr) => {
  acc[curr.age] = (acc[curr.age] || 0) + 1
  return acc
},{})
console.log(c);


// const fruit = [
//   { a: 4, b: 7, c: 3 },
//   { d: 6, e: 4, f: 8 },
//   { b: 5, g: 7, a: 7 },

// ];

// let cnt={};
// fruit.forEach(ele => {
 
// for (const key in ele) {
//   console.log(ele[key])

//  // if()
// if(cnt[key]){
//   cnt[key]=cnt[key] +ele[key]
// }else{
//   cnt[key]=ele[key]
// }

// }
// })

// console.log(cnt)

