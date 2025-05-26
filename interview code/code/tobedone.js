const fruit = [
    { a: 4, b: 7, c: 3, g: 8 },
    { d: 6, e: 4, f: 8, g: 1 },
    { b: 5, g: 7, a: 7 },

];
let log = console.log
function occnes(arr) {

    let obj = {}
    for (const element of arr) {
        log(element)
        for (const key in element) {
            log(key)
            obj[key] = (obj[key] || 0) + element[key]
        }
    }
    log(obj)
}

log(occnes(fruit))
//find missing element from array

//union intersection