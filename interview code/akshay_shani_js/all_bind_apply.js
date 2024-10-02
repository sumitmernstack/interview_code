
/**
 * when we want to attach any function with object, so that we can reuse it and its feature
 */

const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  


let teacher={name:"golu",
    lastname:"keshari",
    age:"29",
    fullName: function () {
        return this.firstName + " " + this.lastName;
      }
}



function getSubject(sub1,sub2) {
    return `${sub1} , ${sub2}`
}


console.log(getSubject.call(teacher,"math","english")) //-->call take any type of parameter
console.log(getSubject.apply(teacher,["math","english"]))//-->call take only array as parameter

console.log(teacher.fullName.bind(member)) 
let result=teacher.fullName.bind(member)
console.log(result())
/**
 * ye function bana ke rakh dega but call nhe kare ga
 * agar kabhi bd me jarat hoga tb use kare ge isko
the bind() , an object can borrow a method from another object.

 */

