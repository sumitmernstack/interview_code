let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

//console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
//console.log("New Employee=> ", newEmployee);

// console.log("---------After modification----------");
newEmployee.ename = "Beck";
 console.log("Employee=> ", employee);
 console.log("New Employee=> ", newEmployee);
// Name of the employee as well as 
// newEmployee is changed.

/**
 * Explanation: From the above example,
 *  it is seen that when the name of newEmployee is modified,
 *  it is also reflected for the old employee object.
 *  This can cause data inconsistency. This is known as a shallow copy. 
 * The newly created object has the same memory address as the old one.

Hence, any change made to either of them changes the attributes for both. 
To overcome this problem, a deep copy is used. 
If one of them is removed from memory, the other one ceases to exist. 
In a way the two objects are interdependent.
 */