/***
 * 1. Parallel Processing:
Parallel processing refers to the ability to execute multiple tasks at the same time,
 allowing them to run concurrently.

 2. Non-Parallel (Serial) Processing:
Non-parallel processing means tasks are executed one after the other.
 Node.js is single-threaded by default and uses an event loop to manage non-blocking I/O tasks. 
CPU-bound tasks can block this event loop.


Key Differences:
1)Parallel processing allows multiple operations to be performed at the same time (simultaneously),
 which is ideal for CPU-bound tasks, 
 whereas non-parallel processing (serial) completes tasks one after another.

2)Node.js is single-threaded by nature, so non-parallel processing is common in I/O-bound tasks due to its non-blocking event loop.

3)For CPU-heavy operations, worker threads or the cluster module should be used to prevent blocking the main thread, 
achieving true parallelism.
 */