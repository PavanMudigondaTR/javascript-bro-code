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

let attempts = 0;
let guess;

let running = true;

while(running){
    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`))

    if(isNaN(guess)){
        window.alert("enter a valid number")
    }
    else if (guess < minNum && guess > maxNum) {
        window.alert(`enter your guess number between ${minNum} and ${maxNum}`)
    }
    else{
        attempts++
        if (guess < minNum){
            window.alert("Guess Too Low !! Please try again !!")
        }
        if (guess > maxNum){
            window.alert("Guess Too High !! Please try again !!")
        }        
    }
    running = false;

}