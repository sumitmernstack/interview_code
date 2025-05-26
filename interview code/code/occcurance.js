function countOccurance(str) {
  const cntObj = {};
  for (const iterator of str) {
    //  cntObj[iterator]
    cntObj[iterator] = (cntObj[iterator] || 0) + 1 
  }
  return cntObj;

}

/**
 * 
The line obj[element] is used to access or create a property in the obj object where the property name is the value of element (which represents each character from the string during the loop).

Detailed breakdown:
element: This represents each character from the string as you loop through the array of characters. For example, if the first character is 'm', then element will be 'm'.

obj[element]:

If obj already has a property with the name matching the current element, it will access that property. For example, if element is 'm' and obj has a property named 'm', it will retrieve its value (which is the count of how many times 'm' has occurred so far).
If obj does not have a property with the name matching the current element, JavaScript will create that property on the fly. So when the first character 'm' is encountered, obj['m'] will be created.
Here’s an example:


 */

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


const fruit = [
  { a: 4, b: 7, c: 3 },
  { d: 6, e: 4, f: 8 },
  { b: 5, g: 7, a: 7 ,c:22}
];

function occerr(arr){
let obj={}
  for (const ele of arr) {
//console.log(ele)
  for(nest in ele ){
    //console.log(nest)
    if(obj[nest]){
    obj[nest]=obj[nest] + ele[nest]
    }else{
    obj[nest]=ele[nest]
   }
  }
}
return obj
}
console.log(occerr(fruit))



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

