//string
const sortArray = (arr) => {
    let res = arr.sort();
    return res
}
let arr = ["sumit", "amit", "sujeeect", "raj"]
console.log(sortArray(arr))

//number
const sortArray_num = (arr) => {
    let res = arr_num.sort((a, b) => a - b);
    return res
}
let arr_num = [1, 23, 35, 12, 9000, 455555, 67]
console.log(sortArray_num(arr_num))


// //without predefine function

function sort_array_without_predefine(array) { //bubble sort
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
    }
    return array
}


var arr_predefine = [1,55,44,2,3,44,76,111111,3,44,66]//[5, 3, 8, 1, 4,1111111,66];
console.log("Original array:", arr_predefine);

console.log("Sorted non array:",sort_array_without_predefine(arr_predefine));
sort_array_without_predefine(arr_predefine)





