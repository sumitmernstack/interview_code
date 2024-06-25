
console.log("1");   //

setTimeout(() => {
	console.log("timeout")
},0);

Promise.resolve().then(() => {
	console.log("promise")
})
console.log("2"); 