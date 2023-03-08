# API 102
## Promises allows users to keep using a site while data from somewhere else is gathered in the background

### Terms
**`async`/`await`**
The most recent way to implement a promise. It is fairly easy to read and reason about.

**Callback Functions**
Before promises were a thing, we used to callback functions to handle asynchronous code. Callback functions were a headache if we ever needed to call asynchornous logic sequentially, this was know as callback hell.

**promise**
A promose returns a response but we cannot control or predict when this happens. In dev speak, we say that a function returns a promise when the function has asynchronous logic that othe code depends upon before it can be executed.

**`Promise`**
A class made available by JavaScript. We use an instance of this class to wrap asychronous code