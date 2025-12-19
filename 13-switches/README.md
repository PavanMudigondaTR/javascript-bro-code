# Learn JavaScript Switches 💡

## 📺 Video
[Learn JavaScript SWITCHES in 6 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=13) (6:45)

## 📝 Description
Switches provide an efficient alternative to using many else-if statements. Learn how to create cleaner, more readable code when checking a variable against multiple possible values.

## 🎯 What You'll Learn

- Switch statement syntax
- Case matching
- Break statements
- Default cases
- When to use switch vs if-else
- Common switch patterns

## 💻 Basic Syntax

```javascript
switch (variable) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    default:
        // code if no match
}
```

## 📝 Complete Example: Day of Week

### Using If-Else (Inefficient)

```javascript
let day = 1;

if (day === 1) {
    console.log("It is Monday");
} else if (day === 2) {
    console.log("It is Tuesday");
} else if (day === 3) {
    console.log("It is Wednesday");
} else if (day === 4) {
    console.log("It is Thursday");
} else if (day === 5) {
    console.log("It is Friday");
} else if (day === 6) {
    console.log("It is Saturday");
} else if (day === 7) {
    console.log("It is Sunday");
} else {
    console.log(`${day} is not a day`);
}
```

### Using Switch (Clean & Efficient)

```javascript
let day = 1;

switch (day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}
```

## 🔴 Why Break is Important

**Without break** - Falls through to next case!

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");    // Executes this
    case 3:
        console.log("Wednesday");  // Also executes this!
    case 4:
        console.log("Thursday");   // And this!
        break;                      // Finally breaks here
}
// Output: Tuesday, Wednesday, Thursday
```

**With break** - Exits after match!

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");  // Executes this
        break;                    // Then exits
    case 3:
        console.log("Wednesday");
        break;
}
// Output: Tuesday
```

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

## 📋 More Examples

### Grade Letter

```javascript
let grade = 85;
let letterGrade;

switch (true) {
    case grade >= 90:
        letterGrade = "A";
        break;
    case grade >= 80:
        letterGrade = "B";
        break;
    case grade >= 70:
        letterGrade = "C";
        break;
    case grade >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}
```

### User Role

```javascript
let role = "admin";

switch (role) {
    case "admin":
        console.log("Full access granted");
        break;
    case "editor":
        console.log("Edit access granted");
        break;
    case "viewer":
        console.log("View-only access");
        break;
    default:
        console.log("No access");
}
```

### Menu Selection

```javascript
let choice = "2";

switch (choice) {
    case "1":
        console.log("You selected option 1");
        break;
    case "2":
        console.log("You selected option 2");
        break;
    case "3":
        console.log("You selected option 3");
        break;
    default:
        console.log("Invalid option");
}
```

## 🔄 Switch vs If-Else

### Use Switch When:
- ✅ Checking **one variable** against many values
- ✅ Values are **specific** (numbers, strings)
- ✅ Want **cleaner, more readable** code
- ✅ Many possible values (5+)

### Use If-Else When:
- ✅ **Complex conditions** (&&, ||)
- ✅ **Range checking** (>, <, >=, <=)
- ✅ **Different variables** in each condition
- ✅ **Boolean logic**

```javascript
// ❌ Switch NOT good for ranges
switch (age) {
    case age >= 18:  // Doesn't work as expected!
        ...
}

// ✅ If-else BETTER for ranges
if (age >= 18) {
    ...
} else if (age >= 13) {
    ...
}
```

## 📋 Practice Exercises

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
