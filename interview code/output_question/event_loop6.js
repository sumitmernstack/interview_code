console.log('start');

setTimeout(() => {
    console.log('setTimeout');
});

Promise.resolve().then(() => {
    console.log('resolve');
});

setImmediate(() => {
    console.log('setImmediate');
});

console.log('end');

// start
// end
// resolve
// setImmediate
// setTimeout