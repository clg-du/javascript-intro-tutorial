
// Lecture 9 - Arrays

// Arrays are used to store multiple values in a single variable. They are a
// fundamental data structure in JavaScript and are used to represent lists of
// items.

// In this example, we define an array of numbers and an array of strings. We
// then access individual elements of the arrays using their index.

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log("numbers: ", numbers);

// Define an array of strings
let strings = ["apple", "banana", "cherry"];
console.log("strings: ", strings);

// Access individual elements of the arrays
console.log("numbers[0]: ", numbers[0]);
console.log("strings[1]: ", strings[1]);

// Arrays in JavaScript are zero-indexed, which means that the first element of
// the array is at index 0, the second element is at index 1, and so on.

// Arrays can store values of different types, including numbers, strings, and
// even other arrays. This makes them a versatile data structure for storing
// collections of data.

// In addition to accessing individual elements of an array, you can also modify
// the elements of an array, add new elements to an array, and remove elements
// from an array.

// Modify an element of the array
numbers[0] = 10;
console.log("numbers: ", numbers);

// Add a new element to the array
numbers.push(6);
console.log("numbers: ", numbers);

// Remove an element from the array
numbers.pop();
console.log("numbers: ", numbers);

// Arrays in JavaScript have a number of built-in methods that can be used to
// manipulate the contents of the array. These methods include push(), pop(),
// shift(), unshift(), splice(), slice(), and many others.

// In this lecture, we covered the basics of arrays in JavaScript, including how
// to define arrays, access elements of arrays, modify arrays, add elements to
// arrays, and remove elements from arrays. Arrays are a powerful data structure
// that are widely used in JavaScript applications.

// End of Lecture 9