
// Lecture 19 Exercises - Break and Continue Statements

/* In this exercise, you will practice working with breaks and continue statements in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Write a function that takes an array of numbers and uses a for loop
// to calculate the sum of the numbers. Use a break statement to exit the loop
// when the sum is greater than 10.

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (sum > 10) {
            break;
        }
    }
    console.log("The sum of the numbers is: " + sum);
}

// Call the sumNumbers function with an array of numbers
sumNumbers([1, 2, 3, 4, 5]);

// Exercise 2: Write a function that takes an array of numbers and uses a for loop
// to calculate the sum of the numbers. Use a continue statement to skip any
// negative numbers in the array.

function sumPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            continue;
        }
        sum += numbers[i];
    }
    console.log("The sum of the positive numbers is: " + sum);
}

// Call the sumPositiveNumbers function with an array of numbers
sumPositiveNumbers([1, -2, 3, -4, 5]);

// Exercise 3: Write a function that takes an array of numbers and uses a for loop
// to find the first even number in the array. Use a break statement to exit the
// loop when an even number is found.

function findFirstEvenNumber(numbers) {
    let evenNumber = null;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumber = numbers[i];
            break;
        }
    }
    console.log("The first even number is: " + evenNumber);
}

// Call the findFirstEvenNumber function with an array of numbers
findFirstEvenNumber([1, 3, 5, 2, 4, 6]);

// Exercise 4: Write a function that takes an array of numbers and uses a for loop
// to find the index of the first negative number in the array. Use a continue
// statement to skip any positive numbers in the array.

function findFirstNegativeNumberIndex(numbers) {
    let index = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            continue;
        }
        index = i;
        break;
    }
    console.log("The index of the first negative number is: " + index);
}

// Call the findFirstNegativeNumberIndex function with an array of numbers
findFirstNegativeNumberIndex([1, 2, -3, 4, -5]);

// Exercise 5: Write a function that takes an array of numbers and uses a for loop
// to find the sum of the positive numbers in the array. Use a continue statement
// to skip any negative numbers in the array.

function sumPositiveNumbers(numbers) {
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            continue;
        }
        sum += numbers[i];
    }
    console.log("The sum of the positive numbers is: " + sum);
}

// Call the sumPositiveNumbers function with an array of numbers
sumPositiveNumbers([1, -2, 3, -4, 5]);

// Exercise 6: Write a function that takes an array of numbers and uses a for loop
// to find the product of the even numbers in the array. Use a continue statement
// to skip any odd numbers in the array.

function productOfEvenNumbers(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            continue;
        }
        product *= numbers[i];
    }
    console.log("The product of the even numbers is: " + product);
}

// Call the productOfEvenNumbers function with an array of numbers
productOfEvenNumbers([1, 2, 3, 4, 5, 6]);

// Exercise 7: Write a function that takes an array of numbers and uses a for loop
// to find the sum of the numbers until a negative number is encountered. Use a
// break statement to exit the loop when a negative number is found.

function sumUntilNegativeNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            break;
        }
        sum += numbers[i];
    }
    console.log("The sum of the numbers until a negative number is: " + sum);
}

// Call the sumUntilNegativeNumber function with an array of numbers
sumUntilNegativeNumber([1, 2, 3, -4, 5]);