// // Just like any Javascript IDE, which checks for all brackets are balanced or not. Similarly write a function that will check if the given string is having all the brackets are closed.

// // Example:
// // a.
// // Input: "function sample (args) { const arr=[]; return arr; }"
// // Output: TRUE
// // b.
// // Input: "function sample(args)) { const arr=[]; return arr; }"
// // Output: FALSE
// // c.
// // Input: "function sample(args) { const arr=[]; return arr;"
// // Output: FALSE
// // d.
// // Input: "function sample(args) { const arr=[[[]; return arr; }"
// // Output: FALSE

// let arr = ["{", "}", "(", ")", "[", "]"]
// let str = "function sample ( args) { const arr=[]; return arr; }"

// function check_sym(str) {

//     for (let i = 0; i < str.length; i++) {
//         // const element = array[i];
//         //console.log(str[i])
//         //    if(!str[i].match(/[a-zA-Z0-9]/)){
//         //     console.log(str[i])
//         //    }
//         let stack = []
//         if (str[i] == "{") {
//             stack.push("}")
//         }
//      else   if (str[i] == "(") {
//             stack.push(")")
//         }
//      else   if (str[i] == "[") {
//             stack.push("]")
//         }

//         else   if (str[i] == "[") {
//             stack.push("]")
//         }
//     }


// }

// console.log(check_sym(str))


//flat arr


// let array = [1, [3, 3], [-2, [3, 5, [6, 7], 1], 0]];

// function flat(arr) {
//     let tmp = []
//    // console.log(arr)
//     for (const element of arr) {
//         if (Array.isArray(element)) {
//             let res = flat(element)
//             for (const nested of res) {

//                 tmp.push(nested)

//             }
//         } else {
//             tmp.push(element)
//         }
//     }
//     return tmp
// }
// console.log(flat(array))


let array = [1, [3, 3], [-2, [3, 5, [6, 7], 1], 0]];

// function flattostright(arr) {
//     let tmp = []
//     for (const element of arr) {

//         if (Array.isArray(element)) {
//             let res = flattostright(element)
//             for (const nested of res) {
//                 tmp.push(nested)
//             }

//         }
//         else {
//             tmp.push(element)
//         }
//     }
//     return tmp
// }

// console.log(flattostright(array))

function flatarr(arr) {

    let resp = []
    for (ele of arr) {
        if (Array.isArray(ele)) {
            let res = flatarr(ele)
            for (let nesele of res) {
                resp.push(nesele)

            }
        } else {
            resp.push(ele)
        }
    }
    return resp
}
console.log(flatarr(array))