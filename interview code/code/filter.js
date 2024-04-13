let array = [2, 5, 3, 4, 8, 1]


function test_filter(arr) {
    let array_val = arr.filter((x) => x >= 3)
    return array_val
}

//console.log(test_filter(array) )

let array1 = [
    { name: 'alex', count: 2 },
    { name: 'bob', count: 1 },
    { name: 'cary', count: 1 }
]

function test_filter1(arr) {
    let array_val = arr.filter((x) => x.count > 1)
    return array_val
}

//console.log(test_filter1(array1))

let array3 = [2, 5, 3, 4, 8, 1]

function odd(x) {
    return x % 2 ==0
}
function test_filter2(arr) {
    let array_val = arr.filter(odd)
    return array_val
}

console.log(test_filter2(array3))