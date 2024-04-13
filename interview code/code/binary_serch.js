
let b = [1,3, 4, 5, 6, 7, 8, 9, 12]

function binary_serch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (right >= left) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) {
            return mid
        }

        if(target > arr[mid]){
            left=mid +1
        }else{
            right=mid-1
        }

    }
    return -1 
}

console.log(binary_serch(b,4))
