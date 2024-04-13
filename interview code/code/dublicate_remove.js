// n^2 complixity
function remove_dublicate() {
    let tmparray = [];
    for (val of array) {
        if (!tmparray.includes(val)) {
            tmparray.push(val)
        }
    }
    return tmparray
}

let array = ["sumit", "amit", "sujeeect", "raj","raj"]//[1, 33, 22, 444, 54, 2345, 22, 33, 1, 1, 1, 2, 2, 2, 33, 44]
console.log(remove_dublicate(array))


//in n complixity
function removeDuplicates(array) {
    var visited = {};
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (!visited[array[i]]) {   // if (union.indexOf(arr2[j]) === -1) {
            visited[array[i]] = true;
            result.push(array[i]);
        }
    }
    return result;
}
console.log(removeDuplicates(array))

//  