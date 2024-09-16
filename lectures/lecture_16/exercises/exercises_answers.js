
// Lecture 16 Exercises - do...while Loops

/* In this exercise, you will practice working with do...while loops in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Calculate the Sum of Numbers in an Array
// In this exercise, you will calculate the sum of numbers in an array using a do...while loop.
// Follow the instructions below to complete the exercise:

// 1. Define an array of numbers with at least 5 elements.
// 2. Initialize a variable sum to store the sum of the numbers.
// 3. Initialize a variable i to store the index of the current number.
// 4. Use a do...while loop to iterate over the array of numbers.
// 5. Inside the loop, add the current number to the sum and increment the index.
// 6. Continue the loop while the index is less than the length of the array.
// 7. Log the sum to the console after the loop completes.

// Exercise 1: Solution
// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Initialize a variable to store the sum
let sum = 0;

// Initialize a variable to store the index
let iter = 0;

// Use a do...while loop to iterate over the array of numbers
do {
  // Add the current number to the sum
  sum += numbers[iter];
  // Increment the index
  i++;
}
while (i < numbers.length);

// Log the sum to the console
console.log("sum: ", sum);

// Expected output:
// sum: 15

// Exercise 2: Find the Maximum Number in an Array
// In this exercise, you will find the maximum number in an array using a do...while loop.
// Follow the instructions below to complete the exercise:

// 1. Define an array of numbers with at least 5 elements.
// 2. Initialize a variable max to store the maximum number.
// 3. Initialize a variable i to store the index of the current number.
// 4. Use a do...while loop to iterate over the array of numbers.
// 5. Inside the loop, compare the current number with the maximum number.
// 6. If the current number is greater than the maximum number, update the maximum number.
// 7. Increment the index and continue the loop while the index is less than the length of the array.
// 8. Log the maximum number to the console after the loop completes.

// Exercise 2: Solution
// Define an array of numbers
let number = [10, 5, 8, 15, 3];

// Initialize a variable to store the maximum number
let max = numbers[0];

// Initialize a variable to store the index
let i = 1;

// Use a do...while loop to iterate over the array of numbers
do {
  // Compare the current number with the maximum number
  if (numbers[i] > max) {
    // Update the maximum number
    max = numbers[i];
  }
  // Increment the index
  i++;
}
while (i < numbers.length);

// Log the maximum number to the console
console.log("max: ", max);

// Expected output:
// max: 15

// Exercise 3: Reverse a String
// In this exercise, you will reverse a string using a do...while loop.
// Follow the instructions below to complete the exercise:

// 1. Define a string with at least 5 characters.
// 2. Initialize a variable reversed to store the reversed string.
// 3. Initialize a variable i to store the index of the current character.
// 4. Use a do...while loop to iterate over the characters of the string.
// 5. Inside the loop, prepend the current character to the reversed string.
// 6. Increment the index and continue the loop while the index is less than the length of the string.
// 7. Log the reversed string to the console after the loop completes.

// Exercise 3: Solution
// Define a string
let str = "hello";

// Initialize a variable to store the reversed string
let reversed = "";

// Initialize a variable to store the index
let ite = 0;

// Use a do...while loop to iterate over the characters of the string
do {
  // Prepend the current character to the reversed string
  reversed = str[ite] + reversed;
  // Increment the index
  i++;
}
while (i < str.length);

// Log the reversed string to the console
console.log("reversed: ", reversed);

// Expected output:
// reversed: olleh