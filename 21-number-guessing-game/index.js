// Number Guessing Game

// Set the range for the guessing game
const minNum = 50;       // Minimum possible number
const maxNum = 60;     // Maximum possible number

// Generate random answer between minNum and maxNum (inclusive)
// 
// FORMULA DERIVATION:
// We want: random integer from min to max (both inclusive)
// Math.random() gives: 0.0 to 0.999... (never reaches 1)
// 
// Problem: How to convert [0, 1) to [min, max]?
// Solution breakdown:
//   1. Get range size: (max - min + 1)
//      - Subtract to get spread: max - min
//      - Add 1 to make max inclusive: max - min + 1
//   2. Scale random: Math.random() * (max - min + 1)
//      - This gives [0, max - min + 1)
//   3. Floor it: Math.floor(...)
//      - Converts to integers: 0, 1, 2, ..., (max - min)
//   4. Shift up: + min
//      - Moves range from [0, max - min] to [min, max]
// 
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// 
// Step 1: (maxNum - minNum + 1) = (60 - 50 + 1) = 11 (range size)
// Step 2: Math.random() generates 0.0 to 0.999...
// Step 3: Multiply by 11 to get 0.0 to 10.999...
// Step 4: Math.floor() rounds down to get 0 to 10
// Step 5: Add minNum (50) to shift range to 50 to 60

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// Game state variables
let attempts = 0;        // Track number of guesses
let guess;               // Store current guess
let running = true;      // Control game loop

// Main game loop - continues until player guesses correctly
while(running){
    // Prompt user for input and convert to number
    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`));

    // Validate input: Check if input is a valid number
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    // Validate range: Check if guess is within allowed range
    // NOTE: Logic issue - should be OR (||) not AND (&&)
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    // Valid guess - process the attempt
    else{
        attempts++;  // Increment attempt counter
        
        // Check if guess is too low
        if (guess < answer){
            window.alert("Too Low! Try again!");
        }
        // Check if guess is too high
        else if (guess > answer){
            window.alert("Too High! Try again!");
        }
        // Guess is correct!
        else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;  // End game loop
        }
    }
}