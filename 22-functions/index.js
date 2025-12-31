// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function happyBirthday(username,age){
    console.log("Happy Birthday to you !!")
    console.log("Happy Birthday to you !!")
    console.log(`Happy Birthday dear ${username}!!`)
    console.log("Happy Birthday to you !!")
    console.log(`You are ${age} years old !!`)
}

happyBirthday("BroCode", 25);

happyBirthday("SpongeBob", 30);

happyBirthday("Patrick", 35);

function add(x,y){
    let result = x + y;
    return result;
}

function subtract(x,y){
    let result = x - y;
    return result;
}

function multiply(x,y){
    let result = x * y;
    return result;
}

function divide(x,y){
    let result = x / y;
    return result;
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else {
        return false;
    }
}


console.log(add(10,5));
console.log(subtract(10,5));
console.log(multiply(10,5));
console.log(divide(10,5));
console.log(isEven(40));
console.log(isValidEmail("BroCode@gmail.com"))
console.log(isValidEmail("ElonMusk.com"))


