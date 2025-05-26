1.//Clustering in Node.js
// Clustering in Node.js allows you to create multiple child processes (workers) 
// that share the same server port and run on multiple CPU cores.
//  This helps improve the application's performance by utilizing all available CPU cores efficiently.

2.//Why Use Clustering?
//Node.js is single-threaded, meaning it handles all requests in a single thread using an event loop. 
// This can be a bottleneck for CPU-intensive tasks. Clustering helps to:

// 1)Utilize Multiple Cores – Runs multiple instances of the Node.js process.
// 2)Load Balancing – Distributes incoming requests across worker processes.
// 3)Improves Performance – Each worker handles separate requests independentlcey.


3.// Benefits of Clustering
// ✅ Better CPU Utilization – Uses multiple cores instead of a single thread.
// ✅ Increased Throughput – Parallel processing of requests.
// ✅ Fault Tolerance – If a worker crashes, another one takes over.


4.
// How This Works
//a) Master Process --> multiple worker processes equal to the number of CPU cores

//b) Worker Processes --> stens to the same port (3000). ---> Handles incoming requests independently

//c) Automatic Restart --> If a worker crashes, the master spawns a new worker.


5.
// Limitations of Clustering
// ❌ Shared Memory Issues – Workers don’t share memory, so they can't directly share cache or session data.
// ❌ Not Suitable for Heavy CPU Tasks – For computationally heavy tasks, consider worker threads instead.

6.
// Each worker in a Node.js cluster is a separate process
// They have their own memory, event loop, and execution context.
// They do not share variables or state directly with other workers or the master process.
// Communication happens via IPC (Inter-Process Communication) — like messages, not shared memory.