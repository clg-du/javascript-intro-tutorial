
// Lecture 18 Exercises - Foreach Loops

/* In this exercise, you will practice working with foreach loops in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Write a function that takes an array of numbers and uses a foreach loop
// to log each number to the console.

function logNumbers(numbers) {
    numbers.forEach(function(number) {
        console.log(number);
    });
}

// Call the logNumbers function with an array of numbers
logNumbers([1, 2, 3, 4, 5]);

// Exercise 2: Write a function that takes an array of strings and uses a foreach loop
// to log each string to the console.

function logStrings(strings) {
    strings.forEach(function(string) {
        console.log(string);
    });
}

// Call the logStrings function with an array of strings
logStrings(["apple", "banana", "cherry", "date", "fig"]);

// Exercise 3: Write a function that takes an array of numbers and uses a foreach loop
// to calculate the sum of the numbers.

function sumNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        sum += number;
    });
    console.log("The sum of the numbers is: " + sum);
}

// Call the sumNumbers function with an array of numbers
sumNumbers([1, 2, 3, 4, 5]);

// Exercise 4: Write a function that takes an array of strings and uses a foreach loop
// to concatenate the strings.

function concatenateStrings(strings) {
    let result = "";
    strings.forEach(function(string) {
        result += string;
    });
    console.log("The concatenated string is: " + result);
}

// Call the concatenateStrings function with an array of strings
concatenateStrings(["apple", "banana", "cherry", "date", "fig"]);

// Exercise 5: Write a function that takes an array of numbers and uses a foreach loop
// to find the maximum number.

function findMaxNumber(numbers) {
    let max = numbers[0];
    numbers.forEach(function(number) {
        if (number > max) {
            max = number;
        }
    });
    console.log("The maximum number is: " + max);
}

// Call the findMaxNumber function with an array of numbers
findMaxNumber([1, 2, 3, 4, 5]);

// Exercise 6: Write a function that takes an array of strings and uses a foreach loop
// to find the longest string.

function findLongestString(strings) {
    let longest = strings[0];
    strings.forEach(function(string) {
        if (string.length > longest.length) {
            longest = string;
        }
    });
    console.log("The longest string is: " + longest);
}

// Call the findLongestString function with an array of strings
findLongestString(["apple", "banana", "cherry", "date", "fig"]);

// Exercise 7: Write a function that takes an array of numbers and uses a foreach loop
// to calculate the square of each number.

function squareNumbers(numbers) {
    let squares = [];
    numbers.forEach(function(number) {
        squares.push(number * number);
    });
    console.log("The squares of the numbers are: " + squares);
}

// Call the squareNumbers function with an array of numbers
squareNumbers([1, 2, 3, 4, 5]);

