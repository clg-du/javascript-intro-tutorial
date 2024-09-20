
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

// If you want to add arguments to the callback function, you can pass them as additional
// arguments to the callback function when calling it inside the main function.

// Revised example with arguments
function greeting(callbackWithArguments) { // funktion med parameter callback

  console.log("Hello!");

  callbackWithArguments(arguments[1]); // Här kommer funktionen sayName att användas

}

// Define a callback function with arguments
function sayNameArg(firstName) { // void function

  console.log("My name is", firstName);

}

// Call the greeting function with the sayNameArg callback and an argument
greeting(sayNameArg, "Charlie");

// In this example, we define a function called greeting that takes a callback function
// with arguments as an argument. We also define a callback function called sayNameArg
// that logs a message to the console with the provided argument. We then call the
// greeting function with the sayNameArg callback and pass an argument to the callback
// function, which causes the callback to be executed with the provided argument inside
// the greeting function.

// Two arguments or more can be passed to the callback function by adding them as additional
// arguments when calling the callback function inside the main function.

// Callback functions are commonly used in JavaScript to handle asynchronous operations,
// such as fetching data from a server or responding to user input. They allow you to
// define custom behavior that can be executed at a specific point in the code.

// Callback functions are a powerful tool for creating modular and reusable code in JavaScript.
// They allow you to pass behavior as
// arguments to other functions, enabling you to customize the behavior of a function without
// modifying its implementation.

// End of Lecture 17
