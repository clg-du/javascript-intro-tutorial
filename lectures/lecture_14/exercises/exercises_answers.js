
// Lecture 14 Exercises - For Loops

/* In this exercise, you will practice working with for loops in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Write a for loop that logs the numbers from 1 to 5 to the console.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exercise 2: Write a for loop that logs the numbers from 5 to 1 to the console.
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Exercise 3: Write a for loop that logs the even numbers from 2 to 10 to the console.
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Exercise 4: Write a for loop that logs the numbers from 5 to 15, with a message
// "The current number is: " before each number.
for (let i = 5; i <= 15; i++) {
    console.log("The current number is: " + i);
}

// Exercise 5: Write a for loop that logs the numbers from 10 to 1, with a message
// "Countdown: " before each number.
for (let i = 10; i >= 1; i--) {
    console.log("Countdown: " + i);
}

// Exercise 6: Write a for loop that logs the numbers from 3 to 12, with a message
// "The current number squared is: " before each number squared.
for (let i = 3; i <= 12; i++) {
    console.log("The current number squared is: " + i * i);
}

// Exercise 7: Write a for loop that create 3 blog posts from an predefined HTML template.
let blogTemplate = `
<div class="blog-post">
  <h2>{title}</h2>
  <p>By {author}</p>
  <p>{content}</p>
</div>
`;

// Define an array of blog post objects
let blogPosts = [
    { title: "JavaScript Functions", author: "John Doe", content: "In this blog post, we will learn about JavaScript functions." },
    { title: "JavaScript Arrays", author: "Jane Smith", content: "This blog post covers JavaScript arrays and how to use them." },
    { title: "Web Development", author: "Alice Johnson", content: "Learn about web development and how to build websites." }
];

// Use a for loop to create blog posts from the template
for (let post of blogPosts) {
    let blogPost = blogTemplate
        .replace("{title}", post.title)
        .replace("{author}", post.author)
        .replace("{content}", post.content);
    console.log(blogPost);
}


