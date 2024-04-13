
function fibo(num) {

    let tmparr = [0, 1];

    for (let i = 2; i < num; i++) {

        tmparr.push(tmparr[i - 1] + tmparr[i - 2])
    }

return tmparr.join(",")
}

console.log(fibo(10))