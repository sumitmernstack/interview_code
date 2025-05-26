let a = {};
let b = {
    key: "b"
};
let c = {
    key: "c"
};
let d='';

a[b] = 45; // a["[object Object]"] = 45
a[c] = 58; // a["[object Object]"] = 58
a[d]=908;
console.log(a[b]);  // This will output: 58


/**
 * Object as Key: When you use a[b], JavaScript converts b to the string "[object Object]" and sets a["[object Object]"] to 45.
 *  Then, the same happens for c, which overwrites the previous value, so a["[object Object]"] becomes 58.
 */