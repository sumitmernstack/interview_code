const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
});// this run sync

promise1.then(() => {
    console.log(3);
});//run async

console.log(4);



// The function (resolve, reject) => { ... } is the executor function. 
// JavaScript does not delay this part — it runs right away.
// Only the .then(), .catch(), and .finally() callbacks are asynchronous, 
// scheduled to run in the microtask queue after the current synchronous code finishes.