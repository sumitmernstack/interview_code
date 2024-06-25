


const asteroidCollision1 = (asteroids) => {
    const stack = []
    
    for (let i = 0; i < asteroids.length; i++) {
        console.log("start-------------------------")

        console.log("i index",i)
        const last = stack[stack.length - 1] //checking, stack length
        console.log('__',stack.length - 1)
        const curr = asteroids[i]
        console.log("-->1",last,curr)
        if (last > 0 && curr < 0) {
			// colliding
            console.log("if")
			console.log("-->2",last,curr)
            if (last + curr === 0) {
				// last and curr collide and cancel each other out  
                   console.log("if1")

                stack.pop()
            } else if (Math.abs(last) < Math.abs(curr)) {
				// last and curr collide and last is smaller
                console.log("if12")
                stack.pop()
                i--
            }
			
        } else {
			// not colliding
            console.log("elas")

			stack.push(curr)
		}
        console.log("stack--->",stack)
    }
    
    return stack
}

let asteroids1 = [-10,2,-5];
console.log(asteroidCollision1(asteroids1)); // Output: [10]