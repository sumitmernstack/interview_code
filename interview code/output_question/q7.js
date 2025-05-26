function addOne (i){

    return i+1;

};

var a = [ 0,1,2];

b = a.forEach(addOne);

c = a.map(addOne);

console.log(c);
console.log(b);

