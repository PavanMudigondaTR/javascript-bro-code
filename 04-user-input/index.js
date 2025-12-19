// ===================================
// JavaScript User Input - Two Methods
// ===================================

// METHOD 1: Window Prompt (Easy Way)
// -----------------------------------
// Uncomment to try the window prompt method:


// let username;
// username = window.prompt("What's your username?");
// console.log(username);



// Alternative: Combined declaration and assignment
// window.alert("Welcome to the site!");  // Greet user with alert
// let username = window.prompt("What's your username?");
// console.log(username);

// document.getElementById("myHeading").textContent = `Hello ${username}`;
// document.getElementById("myParagraph").textContent = `Welcome to the website, ${username}!`;

// METHOD 2: HTML Text Box (Professional Way)
// -------------------------------------------
let username;

document.getElementById("mySubmit").onclick = function() {
    // Get value from text box
    username = document.getElementById("myText").value;
    
    // Update H1 element with greeting
    document.getElementById("myH1").textContent = `Hello ${username}`;
    
    // Also log to console
    console.log(`Username entered: ${username}`);
};


// ===================================
// Practice Examples
// ===================================

// Uncomment to try these exercises:

// Exercise 1: Age Calculator
/*
let birthYear = window.prompt("What year were you born?");
birthYear = Number(birthYear);
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(`You are ${age} years old!`);
*/

// Exercise 2: Greeting with First and Last Name
/*
let firstName = window.prompt("Enter your first name:");
let lastName = window.prompt("Enter your last name:");
console.log(`Hello ${firstName} ${lastName}!`);
*/

// Exercise 3: Form Validation
/*
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    
    if (username === "" || username === null) {
        document.getElementById("myH1").textContent = "Please enter a username!";
    } else {
        document.getElementById("myH1").textContent = `Hello ${username}`;
    }
};
*/
