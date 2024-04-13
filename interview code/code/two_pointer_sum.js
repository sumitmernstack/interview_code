
let arr = [2, 7, 9, 23]

function Two_sum(arr, target) {

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length-1; j++) {
            let sum = arr[i] + arr[j]
            if (sum == target) {
                return `${arr[i]}, ${arr[j]}`
            }

        }

    }
    return -1
}

console.log(Two_sum(arr,9))

//to implement two sum pointer ,the array must be sorted.


function two_pointer_sum(arr, target) {

    let right = 0;
    let left = arr.length - 1
    while (left > right) {
        let sum = arr[right] + arr[left]
        if (sum == target) {
            return `${right}, ${left}`
        }

        if (target > sum) {
            right++
        } else {
            left--
        }
    }
    return -1
}

console.log(two_pointer_sum(arr, 9))