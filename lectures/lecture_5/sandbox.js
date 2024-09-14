
// Lecture 5 - Data Types

// JavaScript has several data types, including strings, numbers, booleans, and
// objects. We will cover each of these in this lecture.

// Strings are used to represent text in JavaScript. They are enclosed in either
// single or double quotes. Strings can be concatenated using the '+' operator.
let firstName = "John";
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log("Full name: ", fullName);

// Numbers are used to represent numeric values in JavaScript. They can be
// integers or floating-point numbers. Mathematical operations can be performed
// on numbers.
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

// Booleans are used to represent true or false values in JavaScript. They are
// often used in conditional statements and loops.
let isTrue = true;
let isFalse = false;
console.log("isTrue: ", isTrue);
console.log("isFalse: ", isFalse);

// Objects are used to represent complex data structures in JavaScript. They
// consist of key-value pairs, where the key is a string and the value can be
// any data type. Objects can be created using object literals.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMale: true
};
console.log("Person: ", person);

// In addition to these data types, JavaScript also has null and undefined
// values. Null represents the absence of a value, while undefined represents
// the absence of a variable or property.

// Null represents the absence of a value.
let nullValue = null;
console.log("Null value: ", nullValue);

// Undefined represents the absence of a variable or property.
let undefinedValue;
console.log("Undefined value: ", undefinedValue);

// In this lecture, we covered the basic data types in JavaScript, including
// strings, numbers, booleans, objects, null, and undefined. These data types
// are the building blocks of JavaScript programs and are used to represent
// different kinds of values.

// End of lecture 5