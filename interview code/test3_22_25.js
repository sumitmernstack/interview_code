// Write a script that simulates concurrent execution using asynchronous functions.

// Below are details of task:- 

// - Create a function processTask(taskId) that simulates a time-consuming task (e.g., fetching data from a remote API, performing a CPU-intensive computation).

// - Implement a loop to spawn multiple instances (at least 3) of processTask() concurrently.

// - Each task should log its start and completion times to the console.

// - Ensure that the tasks run concurrently without blocking each other.

//functioprocessTask(taskId)

// function functioprocessTask() {

//     console.timeLog("start")
//     console.log("start") //sync

//     fetch("https://fake-json-api.mock.beeceptor.com/users").then((res) => {  //asyn and promisefull
//         console.log(res)
//         console.timeLog("then")
//     }).catch((err) => {
//         console.log(err)
//         console.timeLog("err")
//     })

//     console.log("end") //sync
//     console.timeLog("end")
//}

//functioprocessTask()

// //ou need to make an HTTP GET request to an API to fetch data. Use the request() method to make the request.

// - Print the response data to the console in a readable format.
// - Handle possible errors like network issues or invalid responses.

// let axios_request = require("axios")

// let fs = import("fs")

// let url = "https://fake-json-api.mock.beeceptor.com/users"
// let res = axios_request(url).then((res) => {
//     console.log(res)

// }).catch((err) => {
//     console.log(err)

// })

//anotomy


// Function to simulate a time-consuming task
// async function processTask(taskId) {
//     console.log(`Task ${taskId} started at ${new Date().toLocaleTimeString()}`);

//     // Simulate a delay (e.g., fetching data or heavy computation)
//     const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1s to 4s

//     await new Promise(resolve => setTimeout(resolve, delay));

//     console.log(`Task ${taskId} completed at ${new Date().toLocaleTimeString()}`);
//   }

//   // Function to start multiple tasks concurrently
//   async function runConcurrentTasks() {
//     const taskCount = 3;
//     const tasks = [];

//     for (let i = 1; i <= taskCount; i++) {
//       tasks.push(processTask(i));
//     }

//     // Wait for all tasks to complete
//     await Promise.all(tasks);

//     console.log("All tasks completed.");
//   }

//   // Run the script
//   runConcurrentTasks();


// const axios = require('axios');

// // API endpoint
// const url = 'https://jsonplaceholder.typicode.com/posts/1'; // Sample API

// // Make the GET request
// axios.get(url)
//   .then(response => {
//     console.log('Response Data:', JSON.stringify(response.data, null, 2));
//   })
//   .catch(error => {
//     if (error.response) {
//       // Server responded with a status other than 2xx
//       console.error('Error Response:', error.response.status, error.response.statusText);
//     } else if (error.request) {
//       // No response received from server
//       console.error('No Response Received:', error.request);
//     } else {
//       // Other errors
//       console.error('Error:', error.message);
//     }
//   });


function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }

}

console.log(add(1)(2)(7))