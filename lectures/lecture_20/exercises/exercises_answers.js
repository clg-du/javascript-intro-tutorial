
// Lecture 20 Exercises - Switch Statements

/* In this exercise, you will practice working with switch statements in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Write a function that takes a numeric value representing the day of the week
// and uses a switch statement to determine the name of the day. Log the name of the day
// to the console.

function getDayName(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}

// Call the getDayName function with a numeric value representing the day of the week (1-7)
getDayName(3);
getDayName(6);

// Exercise 2: Write a function that takes a string representing a color and uses a switch statement
// to determine the hexadecimal code for the color. Log the hexadecimal code to the console.

function getColorHexCode(color) {
    switch (color) {
        case "red":
            console.log("#FF0000");
            break;
        case "green":
            console.log("#00FF00");
            break;
        case "blue":
            console.log("#0000FF");
            break;
        default:
            console.log("Unknown color");
    }
}

// Call the getColorHexCode function with a string representing a color
getColorHexCode("red");
getColorHexCode("blue");
getColorHexCode("yellow");

// Exercise 3: Write a function that takes a string representing a month and uses a switch statement
// to determine the number of days in the month. Log the number of days to the console.

function getDaysInMonth(month) {
    switch (month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            console.log("31 days");
            break;
        case "April":
        case "June":
        case "September":
        case "November":
            console.log("30 days");
            break;
        case "February":
            console.log("28 or 29 days");
            break;
        default:
            console.log("Invalid month");
    }
}

// Call the getDaysInMonth function with a string representing a month
getDaysInMonth("January");
getDaysInMonth("April");
getDaysInMonth("February");

// Exercise 4: Write a function that takes a string representing a grade (A, B, C, D, F) and uses a

function getGradeDescription(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Average");
            break;
        case "D":
            console.log("Below Average");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid grade");
    }
}

// Call the getGradeDescription function with a string representing a grade
getGradeDescription("A");
getGradeDescription("C");
getGradeDescription("F");

// Exercise 5: Write a function that takes a string representing a direction (north, south, east, west)
// and uses a switch statement to determine the opposite direction. Log the opposite direction to the console.

function getOppositeDirection(direction) {
    switch (direction) {
        case "north":
            console.log("south");
            break;
        case "south":
            console.log("north");
            break;
        case "east":
            console.log("west");
            break;
        case "west":
            console.log("east");
            break;
        default:
            console.log("Invalid direction");
    }
}

// Call the getOppositeDirection function with a string representing a direction
getOppositeDirection("north");
getOppositeDirection("east");
getOppositeDirection("south");

// Exercise 6: Write a function that takes a string representing a day of the week (Monday, Tuesday, etc.)
// and uses a switch statement to determine the number of the day (1-7). Log the number of the day to the console.

function getDayNumber(day) {
    switch (day) {
        case "Monday":
            console.log("1");
            break;
        case "Tuesday":
            console.log("2");
            break;
        case "Wednesday":
            console.log("3");
            break;
        case "Thursday":
            console.log("4");
            break;
        case "Friday":
            console.log("5");
            break;
        case "Saturday":
            console.log("6");
            break;
        case "Sunday":
            console.log("7");
            break;
        default:
            console.log("Invalid day");
    }
}

// Call the getDayNumber function with a string representing a day of the week
getDayNumber("Monday");
getDayNumber("Friday");
getDayNumber("Sunday");

