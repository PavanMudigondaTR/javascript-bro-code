# JavaScript Number Guessing Game ↕

## 📺 Video
[JavaScript NUMBER GUESSING GAME](https://www.youtube.com/watch?v=<VIDEO_ID>&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=21) (8:54)

## 📝 Description
Build a complete number guessing game using JavaScript. Learn to generate random numbers, validate user input, use while loops for game flow, and provide interactive feedback to players.

## 🎯 What You'll Learn

- Random number generation with Math.random()
- User input with window.prompt()
- Input validation (type checking and range checking)
- While loops for game control
- Conditional statements (if/else if/else)
- Type conversion (String to Number)
- Template literals for dynamic messages
- Attempt tracking

## 💻 Game Features

- Random number generation between min and max range
- User input validation
- "Too High" and "Too Low" hints
- Attempt counter
- Win message with total attempts
- Configurable difficulty (change min/max range)

## 🎮 How to Play

1. Game generates a random number between 1 and 100
2. Player enters a guess
3. Game provides feedback:
   - "Too Low" if guess < answer
   - "Too High" if guess > answer
   - "Correct!" when guess matches answer
4. Game tracks number of attempts
5. Player wins when they guess correctly

## 📝 Step-by-Step Implementation

### Step 1: Set Up the Range

```javascript
const minNum = 1;     // Minimum possible number
const maxNum = 100;   // Maximum possible number
```

**From transcript:** "The first thing that we're going to need is to set the minimum and the maximum numbers in our number guessing game."

### Step 2: Generate Random Answer

```javascript
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
```

**How it works:**
- `Math.random()` generates 0.0 to 0.999...
- Multiply by range: `(maxNum - minNum + 1)` 
- `Math.floor()` rounds down to whole number
- Add `minNum` to shift range

**Formula breakdown:**
```javascript
// For range 1-100:
// (100 - 1 + 1) = 100 (range size)
// Math.random() * 100 = 0.0 to 99.999...
// Math.floor(...) = 0 to 99
// + 1 = 1 to 100 ✓
```

**From transcript:** "We will multiply this by within a set of parentheses the range between our maximum minus our minimum then add plus one."

### Step 3: Initialize Game Variables

```javascript
let attempts = 0;     // Track number of guesses
let guess;            // Store current guess
let running = true;   // Control game loop
```

**From transcript:** "We'll create a variable name attempts to keep track of the attempts... I will also create a Boolean variable named running and I will set this to be true."

### Step 4: Create Game Loop

```javascript
while(running) {
    // Game logic here
}
```

**From transcript:** "The reason that we have the Boolean variable running is so that we can exit the game when it's over. We'll set running to equal false."

### Step 5: Get User Input and Convert to Number

```javascript
guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`));
```

**Important:** User input is a **string** by default!

**From transcript:** "So my user input of 50 is a string data type. We'll need to convert it to a number for comparisons."

### Step 6: Validate Input - Check if Number

```javascript
if(isNaN(guess)){
    window.alert("Please enter a valid number");
}
```

**From transcript:** "There's a function to check to see if something is not a number... if you type cast some characters that are non-numeric... you'll end up with not a number."

**Example:** Typing "pizza" results in NaN

### Step 7: Validate Input - Check Range

```javascript
else if (guess < minNum || guess > maxNum) {
    window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
}
```

**From transcript:** "Now what if somebody types in a guess that's below our minimum or above our maximum."

### Step 8: Process Valid Guess

```javascript
else {
    attempts++;  // Increment attempt counter
    
    if (guess < answer) {
        window.alert("Too Low! Try again!");
    }
    else if (guess > answer) {
        window.alert("Too High! Try again!");
    }
    else {
        window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
        running = false;  // End game
    }
}
```

**From transcript:** "If they reach the else statement that means they have a valid number. We'll increase our attempts variable by one."

## 🎯 Complete Code

```javascript
// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`));

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else{
        attempts++;
        
        if (guess < answer){
            window.alert("Too Low! Try again!");
        }
        else if (guess > answer){
            window.alert("Too High! Try again!");
        }
        else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}
```

## 🎮 Example Game Session

**From the video transcript:**

```
Guess: 50  → "Too Low! Try again!"
Guess: 75  → "Too High! Try again!"
Guess: 62  → "Too Low! Try again!"
Guess: 68  → "Too High! Try again!"
Guess: 65  → "Too High! Try again!"
Guess: 63  → "Too Low! Try again!"
Guess: 64  → "Correct! The answer was 64. It took you 7 attempts."
```

## 🔧 Customization Ideas

### Change Difficulty

```javascript
// Easy: 1-10
const minNum = 1;
const maxNum = 10;

// Medium: 1-50
const minNum = 1;
const maxNum = 50;

// Hard: 1-100 (default)
const minNum = 1;
const maxNum = 100;

// Expert: 50-100
const minNum = 50;
const maxNum = 100;
```

### Add Attempt Limit

```javascript
const maxAttempts = 10;

if (attempts >= maxAttempts) {
    window.alert(`Game Over! The answer was ${answer}.`);
    running = false;
}
```

### Add Hint System

```javascript
if (attempts > 5) {
    const difference = Math.abs(guess - answer);
    if (difference <= 5) {
        window.alert("Very close!");
    }
}
```

## 🐛 Common Issues and Solutions

### Issue 1: Input is Always String
**Problem:** `window.prompt()` returns a string  
**Solution:** Convert with `Number()` function

```javascript
// ❌ Wrong
guess = window.prompt("Guess:");

// ✅ Correct
guess = Number(window.prompt("Guess:"));
```

### Issue 2: Invalid Range Check
**Problem:** Using AND (&&) instead of OR (||)  
**Solution:** Use OR to check if outside range

```javascript
// ❌ Wrong - impossible condition
if (guess < minNum && guess > maxNum)

// ✅ Correct
if (guess < minNum || guess > maxNum)
```

### Issue 3: Game Doesn't End
**Problem:** `running = false` in wrong place  
**Solution:** Set to false only when correct answer

```javascript
// ✅ Correct placement
else {
    window.alert("Correct!");
    running = false;  // Inside win condition
}
```

## 🎯 Key Takeaways

- **Math.random()** generates random decimals (0 to 1)
- **Math.floor()** rounds down to create integers
- **Random range formula:** `Math.floor(Math.random() * (max - min + 1)) + min`
- **Type conversion** needed for user input (String → Number)
- **isNaN()** checks if value is "Not a Number"
- **While loops** perfect for game loops with exit condition
- **Boolean flags** (`running`) control loop execution
- **Template literals** make dynamic messages easy
- **Validation** prevents invalid input from breaking game

## 💡 Programming Concepts Used

1. **Constants** - Store unchanging values (min, max, answer)
2. **Variables** - Track changing state (attempts, guess, running)
3. **Random Numbers** - Generate unpredictable gameplay
4. **Type Casting** - Convert between data types
5. **Loops** - Repeat game until win
6. **Conditionals** - Make decisions based on input
7. **User Input** - Interactive gameplay
8. **Validation** - Ensure data integrity

---

**Duration:** 8:54  
**Difficulty:** Beginner  
**Category:** Practice Project / Game Development

## ⏭️ Next Lesson
[JavaScript FUNCTIONS](../22-functions/)
