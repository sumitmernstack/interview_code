let arr1 = [1, 2, 3, 4, 6,5];
let arr2 = [1, 2, 3, 5, 6, 7, 8]
function union(arr1,arr2) {
    var visited = {};
    var result = [];


    for (var i = 0; i < arr1.length; i++) {
        if (!visited[arr1[i]]) {   //
            visited[arr1[i]] = true;
            result.push(arr1[i]);
        }
    }



    for (let j = 0; j < arr2.length; j++) {
        if (!visited[arr2[j]]) {
            visited[arr2[j]] = true;
            result.push(arr2[j]);
        }
    }
    return result
}

console.log(union(arr1,arr2))

