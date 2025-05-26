

/**CHILD PROCESS
 *  the child process module is used to create new processes that can run concurrently.
 *  WE USE this 
 * 1)perform CPU-intensive tasks,
 * 2) handle multiple tasks simultaneously without blocking the event loop.
 * 
 * we use child process for
 * 1)concurrency
 * 2)parallism  -> when you want to scale your application by splitting tasks into multiple processes.
 * 
 * 
 * types
 * 1)exec  -->Executes a shell command and buffers the output. It's suitable for simple commands with a small amount of output.
 * 2)spwan --> More powerful than exec(), spawn() is used when you need to stream large amounts of data from a child process. 
 *            It returns a stream (stdout, stderr) rather than buffering the output.
 * 3)fork -->  : A specialized version of spawn() specifically for spawning new Node.js processes.
 *           It can send and receive messages between the parent and child process, 
 *                  making it useful for inter-process communication (IPC).
 */

/**


Child Process:
Purpose: Used to create independent processes for running commands or tasks.
Port Sharing: Each child process runs independently and does not share the same port.
Process Creation: Can run different scripts or commands (not necessarily the same as the parent).
Communication: Requires manual message passing between parent and child processes.
Use Case: Ideal for running separate tasks like executing shell commands, parallel processing, or handling CPU-intensive operations.
In short:

Cluster: Best for scaling server apps.
Child Process: Best for running separate tasks or commands in parallel.
 */