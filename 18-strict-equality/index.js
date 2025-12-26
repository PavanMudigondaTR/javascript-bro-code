//      =  assignment operator
//     ==  comparison operator (compare if values are equal)
//    === strict equality operator (compare if values & datatype are equal)
//   !=   inequality operator
//   !=== strict inequality operator


const PI = 3.14; // number

if(PI == "3.14"){ // data type is not validated with ==  // "3.14" is string here
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi")
}


if(PI === "3.14"){ // data type is validated with === // "3.14" is string here
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi")
}

if(PI !== "3.14"){ // data type is validated with === // "3.14" is string here
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi")
}


