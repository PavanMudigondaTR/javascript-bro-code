// ternary operator = a shortcut to if() and else() statements
//                    helps to assign a variable based on a condition
//                   condition ? codeIfTrue : codeIfFalse

let age = 21;

let message;

// if(age >= 18){
//     message = "You are an adult"

// }else{
//     message = "You are a minor"
// }

// message = age >= 18 ? "You are an adult" : "You are a minor"

// console.log(message)

// let time = 16;

// let greeting = time < 12 ? "Good Morning !" : "Good Afternoon !"

// console.log(greeting)

// let isStudent = false;

// message = isStudent ? "You are a student !" : "You are not a student !"
// console.log(message)

// let purchaseAmount = 101;
// let discount = (purchaseAmount >= 100) ? 10 : 0;
// console.log(`discount: ${discount}`)
// console.log(`You total is: ${purchaseAmount - (purchaseAmount * discount)/100 }`)

    // <label for="purchaseAmount">Enter purchase amount:</label>
    // <input id="purchaseAmount">
    // <button type="button" id="submitBtn">Submit</button>
    // <p id="result"></p>
    // <script src="index.js"></script>

purchaseAmount = document.getElementById("purchaseAmount")
submitBtn = document.getElementById("submitBtn")
result = document.getElementById("result")

submitBtn.onclick = function() {
    let amount = Number(purchaseAmount.value);
    let discount = (amount >= 100) ? 10 : 0;
    result.textContent = `Discount: ${discount}%. Your total is: $${amount - (amount * discount)/100}`;
}
