
// Lecture 19 - Break and Continue Statements

// The break and continue statements are used to control the flow of a loop. The break
// statement is used to exit a loop prematurely, while the continue statement is used to
// skip the current iteration of a loop and continue with the next iteration.

// In this example, we demonstrate the use of the break statement to exit a for loop when
// a specified condition is met.

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Initialize a variable to store the sum
let sum = 0;

// Use a for loop to iterate over the array of numbers
for (let i = 0; i < numbers.length; i++) {
  // Add the current number to the sum
  sum += numbers[i];
  // Check if the sum is greater than 5
  if (sum > 5) {
    // Exit the loop
    break;
  }
}

// Log the sum to the console
console.log("sum: ", sum);

// In this example, we define an array of numbers and use a for loop to iterate over the
// array. We use the break statement to exit the loop when the sum of the numbers is greater
// than 5. This allows us to stop the loop early and avoid unnecessary iterations.

// The break statement is a powerful tool for controlling the flow of a loop and exiting
// the loop when a specified condition is met.

// End of Lecture 19
