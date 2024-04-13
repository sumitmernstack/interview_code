console.log("hi")
let users = ["alex", "bob", "cary", "alex"];

function create_array(arr) {
    let obj = {}
    for (const i of arr) {
        obj[i] = (obj[i] || 0) + 1
    }
    return obj;
}

console.log(create_array(users))