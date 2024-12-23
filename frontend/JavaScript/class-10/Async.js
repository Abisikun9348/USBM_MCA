// synchronous code
console.log("start");
console.log("middle");
console.log("end");

//Asynchronous code with setTimeout
console.log("start");
setTimeout(() => console.log("middle"),2000);// execute after 2 seconds
console.log("end");

//fetch()
const url ="https://jsonplaceholder.typicode.com/users";