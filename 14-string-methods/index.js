// STRING METHODS = allow you to manipulate and work with text (strings)

let userName = "BroCode    "

// console.log(userName.charAt(1))

// console.log(userName.indexOf("o"))

console.log(userName.lastIndexOf("o"))


console.log(userName.trim())


console.log(userName.toUpperCase())

console.log(userName.toLowerCase())

console.log(userName.startsWith(" "))

if(userName.startsWith(" ")){
    console.log("your user name can't begin with white space")
}
else{
    console.log(userName)
}


let phoneNumber = "123-456-7890"

console.log(phoneNumber.replaceAll("-",""))

console.log(phoneNumber.padStart(15,"0"))


console.log(phoneNumber.padEnd(15,"0"))