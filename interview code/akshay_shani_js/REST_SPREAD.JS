// Spread Operator: Expands an iterable into individual elements.
//1)it expands the array into individual elements 
//2)we use at the time of call
//
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));



// Rest Parameter: Collects multiple elements into a single array.
//we use  in function argument.

function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
