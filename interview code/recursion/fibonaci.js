
/** 1,2,3,4,5-->
 * 
 * @param {*} n // 0 1 1 2 3 5 8
 */
function fibo(n) {
    
    if(n <=1){
        return n
    }
    return fibo(n-1) +fibo(n-2)
}

console.log(fibo(6))