
// Lecture 12 Exercises - Conditional Statements

/* In this exercise, you will practice working with conditional statements in
JavaScript. Remember to log output to the console to see the results of your
code. */

// Exercise 1: Write an if statement that checks if a number is positive,
// negative, or zero. Log the result to the console.
let number = 5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}

// Exercise 2: Write an if statement that checks if a number is even or odd. Log
// the result to the console.

let num = 5;

if (num % 2 === 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}


// Exercise 3: Write an if statement that checks if a person is eligible to vote
// in the United States. The voting age in the United States is 18. Log the
// result to the console.

let age = 18;

if (age >= 18) {
    console.log("The person is eligible to vote in the United States.");
}
else {
    console.log("The person is not eligible to vote in the United States.");
}

// Exercise 4: Write an if statement that checks if a person is eligible to
// retire in the United States. The retirement age in the United States is 65.
// Log the result to the console.

let retirementAge = 65;
let personAge = 65;

if (personAge >= retirementAge) {
    console.log("The person is eligible to retire in the United States.");
}
else {
    console.log("The person is not eligible to retire in the United States.");
}