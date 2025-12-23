// SWITCH = can be efficient replacement to many else if statements
//          used to select one of many code blocks to be executed
//          often used with events or values that can be many options

// let day = 5;

// switch(Number(day)){
//     case 1:
//         console.log("It's a Monday")
//         break;
//     case 2:
//         console.log("It's a Tuesday")  
//         break;        
//     case 3:
//         console.log("It's a Wednesday")
//         break;        
//     case 4:
//         console.log("It's a Thursday")
//         break;        
//     case 5:
//         console.log("It's a Friday")
//         break;        
//     case 6:
//         console.log("It's a Saturday")
//         break;        
//     case 7:
//         console.log("It's a Sunday")
//         break;        
//     default:
//         console.log(`${day} is not a valid day...enter 1 to 7`)  
//         break;                           
// }


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

console.log(letterGrade)
