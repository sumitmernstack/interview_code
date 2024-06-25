
// // // let a = [1, 22, 1, 3333, 2, 3, 4, 5, 63, 3, 3, 3333, 1, 22]

// // // function sort(arr) {
// // //     for (let i = 0; i < arr.length - 1; i++) {
// // //         for (let j = 1 - i; j < arr.length - 1; j++) {
// // //             if (arr[j] < arr[j + 1]) {
// // //                 let tmp = arr[j]
// // //                 arr[j] = arr[j + 1]
// // //                 arr[j + 1] = tmp
// // //             }

// // //         }

// // //     }

// // //     return arr
// // // }

// // // //console.log(sort(a))

// // // let rev = "my name is sumit"//[1,2,3,4,5]

// // // function reverse(arr) {
// // //     arr = arr.split(" ")
// // //     let len = arr.length;
// // //     let halflen = Math.floor(len / 2)

// // //     for (let i = 0; i < halflen; i++) {
// // //         let tmp = arr[i]
// // //         arr[i] = arr[len - 1 - i]
// // //         arr[len - 1 - i] = tmp

// // //     }
// // //     return arr.join(" ")

// // // }
// // // console.log(reverse(rev))


// // // function rev_ele(arr) {
// // //     arr = arr.split(" ")
// // //     //let word = [];
// // //     console.log(arr)
// // //     for (let i = 0; i < arr.length; i++) {
// // // arr[i]=arr[i].split("").reverse("  ").join("")

// // //     }

// // //     return arr.join(" ")
// // // }

// // // console.log(rev_ele(rev))





// // console.log("Start");  

// // async function asyncFunc() {
// //  console.log("Async Function Start");
// //  await new Promise(resolve => setTimeout(resolve, 2000));
// //  console.log("Async Function End");
// // }

// // function syncFunc() {
// //  console.log("Sync Function");
// // }

// // async function run() {
// //  syncFunc();  //call 67
// //  await asyncFunc();//call 61
// //  console.log("After Async");
// // }

// // run();
// // console.log("End"); 

// // // Start  ,   End    Sync Function   Async Function Start    Async Function End   After Async     








// // Manish Jangir
// // 7:27 PM
// for(var i=0; i<3; i++) {
//     setTimeout(() => console.log(i), 3000)
// }

// //3,3,3

// for(let i=0; i<3; i++) {
//     setTimeout(() => console.log(i), 3000)
// }
// 0
// 1
// 2

// // 0,1,2

// //login

// "/login"

// [2,36,7,7,9]
// 2_367_79

// [3,8,1,2,11,3,4]
// 38_1_2_11_34_
// let arr = [2,36,7,7,9]
// function addundersore(arr) {
//     let tmp = ""
//     let order_flag = "even"

//     for (const i of arr) {

//         // if (order_flag == "even") {

//         // }
//         let value = ""

//         if (i % 2 == 0) {
//              value = "e"
//         } else {
//             value = "o"
//         }
//         console.log(value,order_flag)
//         if (order_flag == "even" && value == "e") {

//             tmp += i + "_"
//             order_flag == "odd"

//         } else if (order_flag == "even" && value == "o") {
//             tmp += i
//         }
//         else if (order_flag == "odd" && value == "e") {
//             tmp += i
//             order_flag == "even"
//         } else if (order_flag == "odd" && value == "o") {
//             tmp += i + "_"
//         }



//     }


//     return tmp
// }

// console.log(addundersore(arr))


//console.log("hi")
// let users = ["alex", "bob", "cary", "alex"];

// function create_array(arr) {
//     let obj = {}
//     let tmp=[];
//     for (const i of arr) {
//         obj[i] = (obj[i] || 0) + 1


//     }
//     for (const key in obj) {
//        console.log(obj[key])
//        let object={
//         name:key,
//         count:obj[key]
//        }
//        tmp.push(object)

//     }
//     return tmp;
// }

// console.log(create_array(users))


// const fruit = [
//     { a: 4, b: 7, c: 3 ,g:8},
//     { d: 6, e: 4, f: 8, g:1 },
//     { b: 5, g: 7, a: 7 },

// ];

// function count_fruit(arr) {
//     let obj = {}
//     for (const iterator of arr) {
//         //  console.log(iterator)
//         for (const key in iterator) {
//             // let obj={}
//             console.log(iterator[key])
//             if (obj[key]) {
//                 obj[key] = obj[key] + iterator[key]

//             } else {
//                 obj[key] = iterator[key]
//             }

//         }
//     }
//     return obj
// }

// console.log(count_fruit(fruit))

// let arr = [2, 4, 11, 2, 2, 4, 9]

// function sort(array) {

//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - 1-i; j++) {

//             if (array[j] <array[j + 1]) {
//                 let tmp = array[j]
//                 array[j] = array[j + 1]
//                 array[j + 1] = tmp
//             }

//         }

//     }
//     return array
// }

// console.log(sort(arr))

// let arr = [1, 2, 3, 4, 6, 9,14,16]

// function miss(arr) {
//     let diff = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         let cur = arr[i] - i;
//         if (diff != cur) {

//             while (cur!=diff) {
//             console.log(i + diff)

//                 diff++;
//             }

//         }
//     }
// }
// miss(arr)

//binary serach

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function binary(arr, tagget) {

//     let r = 0
//     let l = arr.length - 1
//     while (l >= r) {
//         let mid = Math.floor((r + l) / 2)

//         if (tagget == arr[mid]) {

//             return mid;
//         }

//         if (tagget > arr[mid]) {
//             r++
//         } else {
//             l--
//         }
//     }
//     return -1
// }

// console.log(binary(a,16))

let a = [11, 22, 11, 33, 1, 2, 3, 4, 5, 6, 22, 3]

function dubonly(arr) {
    let obj = {}
    for (const i of arr) {
        obj[i] = (obj[i] || 0) + 1
    }
    return obj
}

console.log(dubonly(a))

console.log("1");   //

setTimeout(() => {
	console.log("timeout")
},0);

Promise.resolve().then(() => {
	console.log("promise")
})
console.log("2"); 
