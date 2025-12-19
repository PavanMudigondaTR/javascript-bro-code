// variable = A container that stores a value.
//            Behaves as if it were the value it contains

// 1. declaration     let x;
// 2. assignment      x = 200;

// let x;          // Declaration
// x = 123;       // Assignment

// console.log("The value of x is:", x);


// let age = 25;
// let price = 10.99;

// let gpa = 2.1;

// let firstName = "Bro";
// let favoriteFood = "Pizza";
// let email = "Bro123@example.com";
// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(`You are ${age}`, age);
// console.log(`The price is ${price}`, price);
// console.log(`your GPA is : ${gpa}`, gpa);
// console.log(typeof age);    // number
// console.log(typeof price);  // number
// console.log(typeof gpa);    // number

// console.log(`Hello ${firstName}`, firstName);
// console.log(typeof firstName);  // string

// console.log(`Your favorite food is ${favoriteFood}`, favoriteFood);
// console.log(typeof favoriteFood);  // string

// console.log(`Your email is ${email}`, email);
// console.log(typeof email);  // string

// console.log(`Are you online? ${online}`, online);
// console.log(typeof online);  // boolean

// console.log(`Is this item for sale? ${forSale}`, forSale);
// console.log(typeof forSale);  // boolean

// console.log(`Are you a student? ${isStudent}`, isStudent);
// console.log(typeof isStudent);  // boolean


let fullName = "Bro Code";
let age = 25;
let inSchool = false;

document.getElementById("fullName").textContent = `Your name is: ${fullName}`;
document.getElementById("age").textContent = `Your age: ${age}`;
document.getElementById("inSchool").textContent = `Enrolled in school: ${inSchool}`;
