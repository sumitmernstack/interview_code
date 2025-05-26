//1,2,3,4,5,6,7,8,9,10--> 1+2+3+4+....+(n-1) + n

/**
 * 
 * @param {*} n 
 * @returns 
 */
function sumfun(n) {
    if (n == 0) {
        return 0
    }
    let sum = n + sumfun(n - 1)
    return sum

}
console.log(sumfun(4))

