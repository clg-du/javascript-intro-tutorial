
// Lecture 15 - While Loops

// Loops are used to execute a block of code multiple times. The most common types of
// loops in JavaScript are for loops, while loops, and do...while loops.

// In this example, we demonstrate the use of a while loop to iterate over an array of
// numbers and calculate the sum of the numbers.

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Initialize a variable to store the sum
let sum = 0;

// Initialize a variable to store the index
let i = 0;

// Use a while loop to iterate over the array of numbers
while (i < numbers.length) {
  // Add the current number to the sum
  sum += numbers[i];
  // Increment the index
  i++;
}

// Log the sum to the console
console.log("sum: ", sum);

// In this example, we define an array of numbers and use a while loop to iterate over
// the array. The while loop uses an index variable i to access each element of the
// array and calculate the sum of the numbers.

// While loops are a powerful tool for iterating over arrays, strings, and other data
// structures in JavaScript. They provide a concise and expressive way to repeat
// operations until a certain condition is met.

// End of Lecture 15