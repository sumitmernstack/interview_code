console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

1,7,3,5,2,6,4


































// 1 (synchronous code)
// 7 (synchronous code)
// 3 (Promise microtask)
// 5 (Promise microtask)
// 2 (First setTimeout)
// 6 (Second setTimeout)
// 4 (setTimeout inside a Promise's .then)