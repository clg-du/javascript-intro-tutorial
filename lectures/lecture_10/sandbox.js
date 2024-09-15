
// Lecture 10 - Loose vs Strict Equality

// In JavaScript, there are two types of equality operators: loose equality (==)
// and strict equality (===). The loose equality operator (==) compares two values
// for equality, after converting both values to a common type. The strict
// equality operator (===) compares two values for equality without type
// conversion.

// In this example, we demonstrate the difference between loose and strict
// equality by comparing a number and a string. When using the loose equality
// operator (==), JavaScript converts the string to a number before comparing the
// values. When using the strict equality operator (===), JavaScript does not
// perform any type conversion and the comparison fails.

// Compare the following code snippets:

// Loose equality (==)
let num = 5;
let str = "5";
console.log("num == str: ", num == str);

// Strict equality (===)
num = 5;
str = "5";
console.log("num === str: ", num === str);

// In general, it is recommended to use the strict equality operator (===) to
// avoid unexpected behavior due to type conversion. The strict equality operator
// is more predictable and helps to prevent common programming errors.

// It is also possible to use the strict inequality operator (!==) to compare two
// values for inequality without type conversion. This operator is the opposite
// of the strict equality operator (===) and returns true if the values are not
// equal.

// End of Lecture 10

