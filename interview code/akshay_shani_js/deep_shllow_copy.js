
/**
 * 
In JavaScript, shallow copy and deep copy are two ways to duplicate an object.
 They differ in how they handle nested objects (or arrays).

Shallow Copy
A shallow copy of an object is a copy of the object’s top-level properties. 
If the object has properties that are references to other objects, 
only the reference is copied. 
This means that changes to nested objects within the copied object will affect the original.

Example of Shallow Copy
You can create a shallow copy using:

Object.assign()
The spread operator (...)
javascript
Copy code
// Original object
const original = { a: 1, b: { c: 2 } };

// Shallow copy
const shallowCopy = { ...original };

// Modify a nested property in the shallow copy
shallowCopy.b.c = 42;

console.log(original.b.c); // Output: 42
// The change is reflected in the original because only the reference was copied
Deep Copy
A deep copy duplicates all levels of the object. Changes to nested properties in the copied object will not affect the original object. Deep copies are more complex and are typically achieved using JSON.parse(JSON.stringify()) for simpler objects, or using libraries like Lodash (_.cloneDeep()) for complex or circular structures.

Example of Deep Copy
Using JSON.parse(JSON.stringify()):

javascript
Copy code
const original = { a: 1, b: { c: 2 } };

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify a nested property in the deep copy
deepCopy.b.c = 42;

console.log(original.b.c); // Output: 2
// The original is unchanged because the nested object was fully duplicated
Caveats of JSON.parse(JSON.stringify()):
Doesn’t work well with functions, undefined, Date, RegExp, or circular references.
To handle those, use a utility like Lodash's _.cloneDeep():

javascript
Copy code
const _ = require('lodash');
const deepCopy = _.cloneDeep(original);
Summary
Shallow Copy: Only the top level is copied; nested objects share references.

 */


let obj = {
  "name": "ABC",
  "email": "abc@test.com",
  "address": {
      "city": "Pune"
    }
}
 
let obj2 =JSON.parse(JSON.stringify(obj)) 

obj2.name = 'XYZ';

obj2.address.city = "Mumbai";
 
console.log(obj)
// {

//   "name": "ABC",

//   "email": "abc@test.com",

//   "address": {

//       "city": "Pune"

//     }

// }
console.log(obj2)
