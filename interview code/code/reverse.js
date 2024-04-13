//reverse array
function reverseArray(arr) {
    const length = arr.length;
    const halfLength = Math.floor(length / 2);
    
    for (let i = 0; i < halfLength; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    
    return arr;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray)); // Output: [5, 4, 3, 2, 1]

//reverse string
function reverse(){
    let str="my name is sumit kesahri";
    let array=str.split("")
    console.log(array)
let len=array.length
let halflen=Math.floor(len/2)
for(let i=0;i<halflen;i++){
    let tmp=array[i]
    array[i]=array[len-1-i]
    array[len-1-i]=tmp
}
let a=array.join('')
return a
}

console.log(reverse())

