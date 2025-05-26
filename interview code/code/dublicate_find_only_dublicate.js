let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 5, 55, 33, 66]

function unique(arr) {
    let tmp = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] == arr[j] && !tmp.includes(arr[i])) {
                tmp.push(arr[i])
            }
    }
    return tmp
}

//console.log(unique(arr))

//
let val = [1, 2, 3, 4, 2, 3, 4, 5, 6, 7]

function dublicateonly(arr) {
    let tmp = []
    for (let i = 0; i < arr.length; i++) {
        //         if (!tmp.includes(arr[i])) {
        // tmp.push(arr[i])
        //         }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j] && !tmp.includes(arr[j])) {
                tmp.push(arr[j])
            }

        }

    }
    return tmp
}

console.log(dublicateonly(val))
// let array = ["sumit", "amit", "sujeeect", "raj","raj"]
// function removeDuplicates(array) {
//     var visited = {};
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         if (!visited[array[i]]) {   // if (union.indexOf(arr2[j]) === -1) {
//             visited[array[i]] = true;
//             result.push(array[i]);
//         }
//     }
//     console.log(visited)

//     return result;
// }
// console.log(removeDuplicates(array))

const array = [1, 2, 3, 4, 2, 3, 5, 6, 3, 7, 8, 1, 9, 9];

function dubonly(arr) {
    let obj = {}
    for (const element of arr) {
        obj[element] = (obj[element] || 0) + 1
    }

    console.log(Object.keys(obj).filter((x) => obj[x] == 1))

}

console.log("----->", dubonly(array))



