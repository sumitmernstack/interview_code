// // Function to rotate an array n times without predefined methods
// function rotateArray(arr, n) {
//     const length = arr.length;
    
//     // Handle cases where n is larger than the length of the array
//     n = n % length;

//     // Rotate the array by moving elements to the right n times
//     for (let i = 0; i < n; i++) {
//         // Store the last element
//         let lastElement = arr[length - 1];
        
//         // Shift all elements to the right
//         for (let j = length - 1; j > 0; j--) {
//             arr[j] = arr[j - 1];  
//         } //1,1,2,3,4,5
        
//         // Place the last element at the front
//         arr[0] = lastElement;
//     }
    
//     return arr;
// }

// // Example usage
// const arr = [1, 2, 3, 4, 5];
// const n = 2;

// const result = rotateArray(arr, n);
// console.log(result);  // Output: [4, 5, 1, 2, 3]
//1,2,3,4,5


let arr=[1,2,3,4,5]

function nrotate(arr,n){
    
    for(let i=0;i<=n;i++){
       // console.log(i)
        let len=arr.length-1
       
        let lastele=arr[len];
        // console.log(lastele,"lastele")
        for(let j=len;j>0;j--){
         arr[j]=arr[j-1]   
        }
        arr[0]=lastele
        
    }
   return arr;
}
console.log(nrotate(arr,2))