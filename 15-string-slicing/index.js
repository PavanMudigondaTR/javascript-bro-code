// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start,end)

// const fullName = "Bro Code"

// let firstName = fullName.slice(0,3)

// firstName = fullName.slice(0, fullName.indexOf(" "))

// console.log(firstName)

// let lastName = fullName.slice(4,8)

// lastName = fullName.slice(fullName.indexOf(" ")+1,)

// console.log(lastName)



// let firstChar = fullName.slice(0,1)

// console.log(firstChar)

// let lastChar = fullName.slice(-1)

// console.log(lastChar)


const email = "Bro1@gmail.com"

let username = email.slice(0,email.indexOf("@"))
let extension = email.slice(email.indexOf("@")+1,)
console.log(username)
console.log(extension)