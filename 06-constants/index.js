// ========================================
// JavaScript Constants
// ========================================

// Constants are variables that cannot be changed
// Use 'const' instead of 'let' for values that should never change

// ========================================
// Basic Example: Circle Circumference
// ========================================
let circumference;
let PI = 3.14159;
document.getElementById("submitButton").onclick = function() {
    radius = document.getElementById("radiusInput").value;
    console.log(`radius, ${radius}`)
    radius = Number(radius)
    circumference = 2 * PI * radius
    console.log(`circumference, ${circumference}`)
    document.getElementById("myH3").textContent = "Circumference: " + circumference + "cm"
}

