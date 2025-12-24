// while loop = repeat some code WHILE some condition is true

let userName = "";

// while (userName === "" || userName === null) {
//   userName = window.prompt("Enter your name:");
// }

// do{
//     userName = window.prompt("Enter your name:");
// }
// while (userName === "" || userName === null);

// console.log(`Hello ${userName}!`);

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter your username:");
  password = window.prompt("Enter your password:");
  
  // Check for empty or cancelled input
  if (username === null || username === "") {
    console.log("Username cannot be empty.");
    continue;
  }
  
  if (password === null || password === "") {
    console.log("Password cannot be empty.");
    continue;
  }
  
  // Validate credentials
  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("Login successful!");
  } else {
    console.log("Incorrect username or password. Try again.");
  }
}

console.log("You are now logged in!")