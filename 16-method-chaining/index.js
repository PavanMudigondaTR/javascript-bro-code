// Method chaining = calling one method after another
//                   in one continuous line of code

let username = window.prompt("Enter your username: ");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = letter.slice(1);
// extraChars = extraChars.toUpperCase();

// username = letter + extraChars;

// console.log(username);

// ----------No Method Chaining -------------------

console.log(username.trim().charAt(0).toUpperCase() + username.slice(1,).toLowerCase())

// ------------Method Chaining----------------------