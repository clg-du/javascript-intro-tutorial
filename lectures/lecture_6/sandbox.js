
// Lecture 6 - Operators

// JavaScript provides a variety of operators for performing operations on data.
// We will cover some of the most common operators in this lecture.

// Arithmetic operators are used to perform mathematical operations on numbers.
// They include addition (+), subtraction (-), multiplication (*), division (/),
// and modulus (%).
let x = 10;
let y = 5;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;
console.log("Sum: ", sum);
console.log("Difference: ", difference);
console.log("Product: ", product);
console.log("Quotient: ", quotient);
console.log("Remainder: ", remainder);

// Modulus is the integer remainder of dividing x by y. For example, 10 % 5 is 0
// because 10 divided by 5 is 2 with no remainder. 10 % 3 is 1 because 10 divided
// by 3 is 3 with a remainder of 1. The remainder operator is useful for checking
// if a number is even or odd.

// Comparison operators are used to compare values. They include equal to (==),
// not equal to (!=), greater than (>), less than (<), greater than or equal to
// (>=), and less than or equal to (<=).
let a = 10;
let b = 5;
console.log("a == b: ", a == b);
console.log("a != b: ", a != b);
console.log("a > b: ", a > b);
console.log("a < b: ", a < b);
console.log("a >= b: ", a >= b);
console.log("a <= b: ", a <= b);

// Logical operators are used to combine or invert boolean values. They include
// logical AND (&&), logical OR (||), and logical NOT (!).
let isTrue = true;
let isFalse = false;
console.log("isTrue && isFalse: ", isTrue && isFalse);
console.log("isTrue || isFalse: ", isTrue || isFalse);
console.log("!isTrue: ", !isTrue);

// Assignment operators are used to assign values to variables. They include
// simple assignment (=), addition assignment (+=), subtraction assignment (-=),
// multiplication assignment (*=), division assignment (/=), and modulus
// assignment (%=).
let c = 10;
c += 5;
console.log("c: ", c);
c -= 5;
console.log("c: ", c);
c *= 5;
console.log("c: ", c);
c /= 5;
console.log("c: ", c);
c %= 5;
console.log("c: ", c);

// Increment and decrement operators are used to increase or decrease the value of
// a variable by 1. They include increment (++), which adds 1 to the variable, and
// decrement (--), which subtracts 1 from the variable.
let d = 10;
d++;
console.log("d: ", d);
d--;
console.log("d: ", d);

// String concatenation is the process of combining two or more strings into a
// single string. This can be done using the '+' operator.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name: ", fullName);

// In this lecture, we covered some of the most common operators in JavaScript,
// including arithmetic, comparison, logical, assignment, increment, and
// decrement operators. These operators are essential for performing operations
// on data in JavaScript.

// End of Lecture 6