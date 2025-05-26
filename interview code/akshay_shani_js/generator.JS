// these are those type of function that can be pause or resumed
function* genrator(){

    yield 10
    yield 20
    yield 30
}

let gen = genrator();

for (let i = 0; i <3; i++) {
   console.log(gen.next());
}
