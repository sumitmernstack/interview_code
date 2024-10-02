let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
//console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);


/**
 * Explanation: Here the new object is created using the JSON.parse() and JSON.
 * stringify() methods of JavaScript.
 *  JSON.stringify() takes a JavaScript object as an argument and then transforms it into a JSON string.
 *  This JSON string is passed to the JSON.parse() method which then transforms it into a JavaScript object.
 */

let arr = [1, 2, 3, 4, 5, 6]
function rev(arr) {
    let len = arr.length
    let half = Math.floor(len / 2);
    for (let i = 0; i < half; i++) {
        let tmp = arr[i]
        arr[i] = arr[len - 1 - i]
        arr[len - 1 - i] = tmp
    }
    return arr;
}
console.log(rev(arr))


//prime no