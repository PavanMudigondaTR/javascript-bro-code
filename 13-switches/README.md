# Learn JavaScript Switches 💡

## 📺 Video
[Learn JavaScript SWITCHES in 6 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=13) (6:45)

## 📝 Description
Switches provide an efficient alternative to using many else-if statements. Learn how to create cleaner, more readable code when checking a variable against multiple possible values.

## 🎯 What You'll Learn

- Switch statement syntax
- Case matching
- Break statements and why they're needed
- Default cases
- When to use switch vs if-else
- Switch with true for range checking
- Fall-through behavior

## 🔧 HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="index.js"></script>
</body>
</html>
```

## 💻 Basic Syntax

```javascript
// SWITCH = can be efficient replacement to many else if statements
//          used to select one of many code blocks to be executed
//          often used with events or values that can be many options

switch (variable) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    default:
        // code if no match
        break;
}
```

**How it works:** We examine a value (variable) against matching cases. If there's a match, execute the code under that case.

## 📝 Example 1: Day of Week

### Using Switch (from index.js)

```javascript
let day = 5;

switch(Number(day)){
    case 1:
        console.log("It's a Monday")
        break;
    case 2:
        console.log("It's a Tuesday")  
        break;        
    case 3:
        console.log("It's a Wednesday")
        break;        
    case 4:
        console.log("It's a Thursday")
        break;        
    case 5:
        console.log("It's a Friday")
        break;        
    case 6:
        console.log("It's a Saturday")
        break;        
    case 7:
        console.log("It's a Sunday")
        break;        
    default:
        console.log(`${day} is not a valid day...enter 1 to 7`)  
        break;                           
}
```

**How it works:**
1. We examine the `day` variable
2. Check against each case (1 through 7)
3. If there's a match, execute that code
4. `break` exits the switch
5. If no matches, execute the `default` case

## 🔴 Why Break Statements Are Important

**The reason we have these break statements is to break out of the switch once we have a matching case.**

**Without break** - Code cascades down and executes all following cases!

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("It's a Monday");
    case 2:
        console.log("It's a Tuesday");    // Executes this
    case 3:
        console.log("It's a Wednesday");  // Also executes this!
    case 4:
        console.log("It's a Thursday");   // And this!
    case 5:
        console.log("It's a Friday");     // And this!
    case 6:
        console.log("It's a Saturday");   // And this!
    case 7:
        console.log("It's a Sunday");     // And this!
    default:
        console.log(`${day} is not a valid day...enter 1 to 7`);  // Even this!
}
// Output: It's a Tuesday, It's a Wednesday, It's a Thursday, It's a Friday, It's a Saturday, It's a Sunday, 2 is not a valid day...enter 1 to 7
```

**Explanation:** Once we have a matching case, we execute the code found within that space, then cascade down and execute any code that follows after, including code within different cases. That's why you want these break statements after each case.

**With break** - Exits immediately after match!

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("It's a Monday");
        break;
    case 2:
        console.log("It's a Tuesday");  // Executes this
        break;                            // Then exits
    case 3:
        console.log("It's a Wednesday");
        break;
}
// Output: It's a It's a Tuesday
```

## 📝 Example 2: Letter Grade (More Complex - from index.js)

```javascript
let testScore = 43;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;        
    case testScore >= 70:
        letterGrade = "C";
        break;        
    case testScore >= 60:
        letterGrade = "D";
        break;        
    default:
        letterGrade = "F";
        break;        
}

console.log(letterGrade)  // "F"
```

**How this works:** Another way to write a switch is to examine the value of `true` against matching cases which contain a condition.

1. Each case has a condition (e.g., `testScore >= 90`)
2. The condition evaluates to `true` or `false`
3. If `true` equals `true`, we execute that code
4. If the condition is `false`, we skip over it
5. Test score of 92 → Grade A
6. Test score of 85 → Grade B
7. Test score of 33 → Grade F

**Why use this pattern?** When you need range checking within a switch statement.

## 💡 Fall-Through (Intentional)

Sometimes you WANT fall-through behavior:

```javascript
let month = 2;
let daysInMonth;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        daysInMonth = 31;
        break;
    case 4: case 6: case 9: case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = 28;
        break;
    default:
        daysInMonth = 0;
}
```

## 📋 Switch vs If-Else: When to Use What

### Use Switch When:
- ✅ Checking **one variable** against many specific values
- ✅ Values are **exact matches** (numbers, strings)
- ✅ Want **cleaner, more readable** code
- ✅ Have many possible values (5+)
- ✅ Using with events or values that can be many options

**If you find yourself using a lot of else-if statements, I would recommend using a switch instead.**

### Use If-Else When:
- ✅ **Complex conditions** (&&, ||)
- ✅ **Range checking** (>, <, >=, <=) - though you can use `switch(true)` pattern
- ✅ **Different variables** in each condition
- ✅ **Boolean logic**
- ✅ Only have a few conditions (2-3)

### Exercise 1: Calculator
Create a calculator using switch for operations (+, -, *, /)

### Exercise 2: Traffic Light
Switch based on color: "red" = stop, "yellow" = slow, "green" = go

### Exercise 3: Season Finder
Given month number (1-12), return the season

### Exercise 4: Command Parser
Switch on user commands: "help", "start", "stop", "exit"

## 🎯 Key Takeaways

- **Switch** is a clean alternative to multiple if-else statements
- Use **case** to match values
- **break** prevents fall-through to next case
- **default** handles unmatched cases (like else)
- Fall-through can be **intentional** (group multiple cases)
- Switch uses **strict equality** (===)
- Best for checking **one variable against many specific values**
- Don't forget **break** statements!

## ⏭️ Next Lesson
[JavaScript STRING METHODS](../14-string-methods/)

---

**Duration:** 6:45  
**Difficulty:** Beginner  
**Category:** Control Flow
