

console.log("Start");  

async function asyncFunc() {
 console.log("Async Function Start");
 await new Promise(resolve => setTimeout(resolve, 2000));
 console.log("Async Function End");
}

function syncFunc() {
 console.log("Sync Function");
}

async function run() {
 syncFunc();  
 await asyncFunc();
 console.log("After Async");
}

run();
console.log("End"); 



// Start
// Sync Function
// Async Function Start
// End
// Async Function End
// After Async

/**
 * Breakdown of Execution:
console.log("Start"): This will print "Start" immediately.

run() is called: This begins the execution of the run function, 
which first calls syncFunc().

syncFunc() is executed:

Inside syncFunc(), console.log("Sync Function") is called, which prints "Sync Function".
await asyncFunc() is called:

The run() function hits the await asyncFunc() line, so it waits for the asyncFunc to complete.
asyncFunc() starts, and it prints "Async Function Start".
The await new Promise(...) introduces a 2-second delay before the next line in asyncFunc() is executed.
Meanwhile, the main thread continues with its synchronous operations.
console.log("End"):

Since await asyncFunc() is awaiting completion, the control goes back to the main thread,
 and the next synchronous line (console.log("End")) is executed, printing "End".
After the 2-second delay:

asyncFunc() continues after the await, printing "Async Function End".
Control returns to the run() function, and it prints "After Async".
 */




































// // // Start  ,   End    Sync Function   Async Function Start    Async Function End   After Async     

