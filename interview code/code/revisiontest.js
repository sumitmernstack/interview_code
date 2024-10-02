//find occurance
let str_arr = "mynameissumitkeshari"
function occurance(str) {
    str = str.split("")

    let obj = {}
    for (const element of str) {

        obj[element] = (obj[element] || 0) + 1
    }
    return obj
}
//console.log(occurance(str_arr))


//linear search

let target = 23;
let arr = [1, 2, 3, 4, 523, 12, 45, 23, 88]
function linerarSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            // console.log(i)
            return `element found at ${i}`;
        }
    } return -1;

}

//console.log(linerarSearch(arr,target))


//binary search



function binarySearch(arr, target_ele) {

    arr = arr.sort((a, b) => { return a - b })
    console.log(arr)
    let left = 0
    let right = arr.length - 1;

    while (right >= left) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] == target_ele) {
            console.log(target_ele)
            return `element found at ${mid}`
        }
        if (target_ele > arr[mid]) {
            left = arr[mid] + 1;
        } else {
            right = arr[mid] - 1;

        }
    }
    return -1

}
let bin_arr = [11, 23, 53, 48, 51, 63, 33, 94, 15, 36];
//console.log(binarySearch(bin_arr, 53))

//reverse a string

let str = "my name is sumit kesahri"

function revstr(string) {
    string = string.split(" ")   //.reverse().join(" ")
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        revValue = string[i].split("").reverse().join("")
        console.log(revValue)
        arr.push(revValue)
    }
    return arr
}
//console.log(revstr(str))

//reverse an array
//[1,2,3,4,5,6,7,8,9,10]

function reverseArray(arr) {
    arr = arr.split(" ")
    let len = arr.length
    let half = Math.floor(len / 2)
    // console.log(half)
    for (let i = 0; i < half; i++) {
        let tmp = arr[i]
        arr[i] = arr[len - 1 - i]
        arr[len - 1 - i] = tmp

    }
    return arr

}
//console.log(reverseArray("my name is sumit kesahri"))

//remove dublicate

let dubarr = [1, 2, 3, 4, 5, 6, 2, 3, 1, 4]

function dublicateremove(arr) {
    let tmparr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!tmparr.includes(arr[i])) {
            tmparr.push(arr[i])
        }
    }
    return tmparr
}
//console.log(dublicateremove(dubarr))

function removeDuplicatesinNcomplixity(array) {
    let visited = {}
    let tmparr = []
    for (let i = 0; i < array.length; i++) {
        if (!visited[array[i]]) {
            visited[array[i]] = true
            tmparr.push(array[i])
        }

    }
    return tmparr
}
//console.log(removeDuplicatesinNcomplixity(dubarr))

//two pionter
let sumarray = [2, 7, 9, 23]

function twopointer(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let sum = array[i] + array[j];
            if (sum == target) {
                return `values are ${array[i]} ${array[j]}`
            }
        }
    }
    return -1
}

//console.log(twopointer(sumarray,11))

///two pointer
//let twopointerarr=[2, 7, 9, 23]

//n array rotate

let r_array = [1, 2, 3, 4, 5]

function nrotate(arr, rotate) {
    let len = arr.length - 1
    for (let i = 0; i < rotate; i++) {
        let last_ele = arr[len]
        for (let j = len; j > 0; j--) {

            arr[j] = arr[j - 1]
        }
        arr[0] = last_ele;
    }
    return arr
}
//console.log(nrotate(r_array,1))

//twopointermain

let twopointarr = [2, 7, 9, 11, 44]

function twopointermain(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (right > left) {

        let sum = arr[left] + arr[right]
        if (sum == target) {
            return `the values are ${left}, ${right}`
        }

        if (sum > target) {
            right--
        } else {
            left++
        }
    }
    return -1
}


//console.log(twopointermain(twopointarr,13))

//binary search

let bin = [1, 2, 3, 4, 5, 6, 7, 12] // 7

function binarysearchcode(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (right >= left) {
        let mid = Math.floor((left + right) / 2)
        if (target == arr[mid]) {
            return `val at${mid}`
        }
        if (target > arr[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }

    }
    return -1

}
//console.log(binarysearchcode(bin, 7))

let tp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //9
function tpcode(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (right > left) {
        let sum = arr[left] + arr[right]
        if (sum == target) {
            return `value found at ${left},${right}`
        }
        if (sum > target) {
            right--
        } else {
            left++
        }
    }
    return -1
}
//console.log(tpcode(tp,9))


//iife
let sum = ((a, b) => {
    return a + b
})(2, 7)
console.log(sum)

//map filter


const people = [
    { last_name: 'Doe', age: 25 },
    { last_name: 'Smith', age: 30 },
    { last_name: 'Johnson', age: 40 },
    { last_name: 'Williams', age: 35 },
    { last_name: 'Brown', age: 45 }
];

function map_filter_code(people) {
    let result = people.filter((ele) => ele.age > 30).map((item) => item.last_name + "keshari")
    return result
}
//console.log(map_filter_code(people))

//array with n rotation
let rarr = [1, 2, 3, 4, 5]
function rotatecodelogic(arr, rotate) {
    let len = arr.length - 1;
    for (let i = 0; i <= rotate; i++) {
        let lastelement = arr[len]
        for (let j = len; j > 0; j--) {
            arr[j] = arr[j - 1]
        }
        arr[0] = lastelement

    }
    return arr
}
//console.log(rotatecodelogic(rarr,3))

let filyter_array = [2, 5, 3, 4, 8, 1]

function filtermoretahn3(filyter_array) {
    const result = filyter_array.filter((x) =>
        x > 3
    )
    return result
}
console.log(filtermoretahn3(filyter_array))

let array1 = [
    { name: 'alex', count: 2 },
    { name: 'bob', count: 1 },
    { name: 'cary', count: 1 }
]


function filtercount(array1) {
    const result = array1.filter((x) =>
        x.count > 1
    ).map((ele) => ele.name)
    return result
}
console.log(filtercount(array1))

let odd_even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function odd(arr) {
    const result = arr.filter((ele) => ele % 2 == 0)
    return result
}
console.log(odd(odd_even))

//sort an array

let sort_array = [25, 54, 11, 88, 22, 11, 34, 2, 7, 3, 23, 45, 1, 55]

function sortfun(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1-i; j++) {
            if (arr[j] <arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}
console.log(sortfun(sort_array))