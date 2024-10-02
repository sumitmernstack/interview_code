/**
 * DEFINATION
 * Event-Driven Architecture (EDA) in Node.js is a design pattern
 * in this flow of the application is determined by events.
 * It use  concept of producing and consuming events to trigger actions. 
 * it is reponsible asynchronous, non-blocking .


Benefits of Event-Driven Architecture in Node.js:
Asynchronous Handling
Loose Coupling
Scalability: Easily scalable since events can trigger specific tasks without waiting for other operations to complete.




Event-Driven Architecture Example
In a payment system:

Event Emitter: When a user initiates a payment.
Event Listener: The system listens for the payment success event.
Event Handler: Upon receiving the success event, the system sends a receipt email.
This decouples components, improves scalability, and allows asynchronous communication.
*/