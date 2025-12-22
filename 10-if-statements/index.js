// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

// let age = 25;

// if(age>=18){
//     console.log("you are old enough to enter this site")
// }

// let time = 14;

// if(time < 12){
//     console.log("Good Morning!");
// }
// else{
//     console.log("Good Afternoon!");
// }

// let isStudent = false;

// if(isStudent){
//     console.log("you are a student")
// }
// else{
//     console.log("you are not a student")
// }

// let age = 25;

// let hasLicense = false;

// if(age >= 16){
//     console.log("you are old enough to drive")
//     if(hasLicense){
//         console.log("you have a license")
//     }
//     else{
//         console.log("you don't have a license")
//     }
// }
// else{
//     console.log("you must be 16 plus to have a license")
// }

const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");
const resultElement = document.getElementById("resultElement");

submitBtn.onclick = function(){
    let age = Number(ageInput.value);

    if(age >= 100){
        resultElement.textContent = "you are too old to enter this site"
    }
    else if(age == 0){
        resultElement.textContent = "your can not enter, you are just born"
    }
    else if(age < 0){
        resultElement.textContent = "your age can't be below 0"
    }
    else if(age >= 18){
        resultElement.textContent = "you are old enough to enter this site"
    }
    else{
        resultElement.textContent = "you must be 18+ to enter this site"
    }

}
