let a = [-10, 2, -5]

function met(array) {

    let stack = []
 
    for (let i = 0; i < array.length; i++) {
        let cur = array[i]
        let last = stack[stack.length - 1]
        if (last > 0 && cur < 0) {

            if (last + cur === 0) {
                stack.pop()
            } else if (Math.abs(cur) > Math.abs(last)) {
                stack.pop()
                i--;
            }

        }
        else {
            stack.push(cur)
        }

    }
    return stack
}

console.log(met(a))