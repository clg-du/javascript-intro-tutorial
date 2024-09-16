
// Lecture 17 - Callback Functions

// Callback functions are functions that are passed as arguments to other functions and
// executed inside the function body. They are commonly used in JavaScript to perform
// asynchronous operations, handle events, and more.

// In this example, we define a function called greet that takes a callback function as
// an argument and executes the callback inside the function body.

// Define a function that takes a callback function as an argument
function greet(callback) {
  // Log a greeting message
  console.log("Hello!");
  // Execute the callback function
  callback();
}

// Define a callback function
function sayName() {
  console.log("My name is John.");
}

// Call the greet function with the sayName callback
greet(sayName);

// In this example, we define a function called greet that takes a callback function as an
// argument. We also define a callback function called sayName that logs a message to the
// console. We then call the greet function with the sayName callback, which causes the
// callback to be executed inside the greet function.

// Callback functions are a powerful tool for creating modular and reusable code in JavaScript.
// They allow you to pass behavior as
// arguments to other functions, enabling you to customize the behavior of a function without
// modifying its implementation.

// End of Lecture 17
