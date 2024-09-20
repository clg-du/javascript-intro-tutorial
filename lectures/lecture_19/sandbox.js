
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

// The continue statement is used to skip the current iteration of a loop and continue with
// the next iteration. In this example, we demonstrate the use of the continue statement to
// skip even numbers in a loop.

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Initialize a variable to store the sum
let sum = 0;

// Use a for loop to iterate over the array of numbers
for (let i = 0; i < numbers.length; i++) {
  // Check if the current number is even
  if (numbers[i] % 2 === 0) {
    // Skip even numbers
    continue;
  }
  // Add the current number to the sum
  sum += numbers[i];
}

// Log the sum to the console
console.log("sum: ", sum);

// In this example, we define an array of numbers and use a for loop to iterate over the
// array. We use the continue statement to skip even numbers and only add odd numbers to
// the sum. This allows us to filter out even numbers and only perform the desired operation
// on odd numbers.

// The continue statement is a useful tool for controlling the flow of a loop and skipping
// iterations that are not needed. By using the continue statement, we can make our loops
// more efficient and concise.

// End of Lecture 19
