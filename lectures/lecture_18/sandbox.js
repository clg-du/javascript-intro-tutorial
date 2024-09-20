
// Lecture 18 - Foreach Loops

// The forEach method is a built-in method of arrays in JavaScript that is used to iterate
// over the elements of an array and execute a callback function for each element. The
// forEach method takes a callback function as an argument and executes the callback for
// each element in the array.

// In this example, we demonstrate the use of the forEach method to iterate over an array
// of numbers and log each number to the console.

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use the forEach method to iterate over the array of numbers

numbers.forEach(function(number) {
  // Log the current number to the console
  console.log(number);
});

// In this example, we define an array of numbers and use the forEach method to iterate
// over the array. The forEach method takes a callback function as an argument and executes
// the callback for each element in the array. In this case, the callback function logs
// each number to the console.

// Let us make it even more clear that a callback function is used in the forEach method
// by defining the callback function separately and passing it as an argument to the forEach
// method.

// Define a callback function that logs a number to the console
function logNumber(number) {
  console.log(number);
}

// Use the forEach method with the logNumber callback function
numbers.forEach(logNumber);

// In this example, we define a callback function called logNumber that logs a number to
// the console. We then use the forEach method with the logNumber callback function to
// iterate over the array of numbers and log each number to the console.

// Note that we did not need to pass arguments to the logNumber function when using it as
// a callback function in the forEach method. The forEach method automatically passes the
// current element of the array as an argument to the callback function.

// The forEach method is a powerful tool for iterating over arrays in JavaScript. It provides
// a concise and expressive way to perform operations on each element of an array.

// End of Lecture 18