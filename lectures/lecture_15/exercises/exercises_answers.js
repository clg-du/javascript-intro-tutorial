
// Lecture 15 Exercises - While Loops

/* In this exercise, you will practice working with while loops in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Write a while loop that logs the numbers from 1 to 5 to the
// console.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Exercise 2: Write a while loop that logs the numbers from 5 to 1 to the
// console.
let j = 5;
while (j >= 1) {
    console.log(j);
    j--;
}

// Exercise 3: Write a while loop that logs the even numbers from 2 to 10 to the
// console.
let k = 2;
while (k <= 10) {
    console.log(k);
    k += 2;
}

// Exercise 4: Write a while loop that logs the numbers from 5 to 15, with a
// message "The current number is: " before each number.
let l = 5;
while (l <= 15) {
    console.log("The current number is: " + l);
    l++;
}

// Exercise 5: Write a while loop that logs the numbers from 10 to 1, with a
// message "Countdown: " before each number.
let m = 10;
while (m >= 1) {
    console.log("Countdown: " + m);
    m--;
}

// Exercise 6: Write a while loop that logs the numbers from 3 to 12, with a
// message "The current number squared is: " before each number squared.
let n = 3;
while (n <= 12) {
    console.log("The current number squared is: " + n * n);
    n++;
}

// Exercise 7: Write a while loop that create blog posts from an predefined HTML
// template, but skips past any post that includes the word "salmon".
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
    { title: "Web Development", author: "Alice Johnson", content: "Learn about web development and how to build websites." },
    { title: "Salmon Recipe", author: "Chef Mike", content: "This blog post contains a delicious salmon recipe." },
    { title: "Web Design Tips", author: "Emily Brown", content: "Get tips on designing beautiful websites." },
    { title: "Salmon Fishing", author: "Angler Joe", content: "Learn about the best spots for salmon fishing." },
    { title: "Web Development Tools", author: "Alex Green", content: "Discover essential tools for web development." }
];

// Loop through the blog posts array and create blog posts from the template for each post that does not include the word "salmon"
let index = 0;
while (index < blogPosts.length) {
    let post = blogPosts[index];
    if (!post.content.includes("salmon")) {
        let blogPost = blogTemplate
            .replace("{title}", post.title)
            .replace("{author}", post.author)
            .replace("{content}", post.content);
        console.log(blogPost);
    }
    index++;
}

// Exercise 8: Write a while loop that logs the Fibonacci sequence up to the
// 10th term. The Fibonacci sequence is a series of numbers where each number
// is the sum of the two preceding ones, starting from 0 and 1.
let a = 0;
let b = 1;
let count = 0;
while (count < 10) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    count++;
}

// Exercise 9: Write a while loop that logs the numbers from 1 to 100, but for
// multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log
// "Buzz" instead of the number. For numbers that are multiples of both 3 and 5,
// log "FizzBuzz".

let o = 1;
while (o <= 100) {
    if (o % 3 === 0 && o % 5 === 0) {
        console.log("FizzBuzz");
    } else if (o % 3 === 0) {
        console.log("Fizz");
    } else if (o % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(o);
    }
    o++;
}