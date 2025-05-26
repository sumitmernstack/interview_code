let a = [1, 2, 3, 4, 5]
let b = [2, 4, 6, 7, 8]
let c = [];

function merge(a, b) {
    let a_len = a.length
    let b_len = b.length;
    let i = 0;
    let j = 0;
    let k = 0;
    while (a_len > i && b_len > j) {
        if (a[i] < b[j]) {
            c[k] = a[i]
            i++
            k++
        } else {
            c[k] = b[j]
            j++
            k++
        }
    }

    while (a_len > i) {

        c[k] = a[i]
        i++
        k++
    }

    while (b_len > j) {
        c[k] = b[j]
        j++
        k++
    }

return c;


}

//console.log("merge-->",merge(a,b))


function union(a, b) {
    let a_len = a.length
    let b_len = b.length;
    let i = 0;
    let j = 0;
    let k = 0;
    while (a_len > i && b_len > j) {
        if (a[i] < b[j]) {
            c[k] = a[i]
            i++
            k++
        } else if (a[i] > b[j]) {
            c[k] = b[j]
            j++
            k++
        }else{
            c[k] = a[i]
            i++
            j++
            k++
          
        }
    }

    while (a_len > i) {

        c[k] = a[i]
        i++
        k++
    }

    while (b_len > j) {
        c[k] = b[j]
        j++
        k++
    }

return c;


}

console.log("union-->",union(a,b))


function inter(a, b) {
    let a_len = a.length
    let b_len = b.length;
    let i = 0;
    let j = 0;
    let k = 0;
    while (a_len > i && b_len > j) {
        if (a[i] < b[j]) {
          
            i++
            k++
        } else if (a[i] > b[j]) {
        
            j++
            k++
        }else{

            c[k] = a[i]
            i++
            j++
            k++
          
        }
    }

return c;


}

//console.log("inter-->",inter(a,b))