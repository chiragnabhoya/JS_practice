// Primitive

// 7 types : String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId)

const bigNumber = 1234567890123456789012345678901234567890n

// Reference (Non-Primitive)

//Array, Objects, Functions

const heros =["shaktiman", "naagraj", "doga"]
let myObj = {
  name: 'Chirag',
  age: 24
}

const myFunction = function(){
    console.log("Hello from Function")
}

// console.log(typeof myFunction)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (None-Primitive)

let myName = "Chirag"

let anotherName = myName
anotherName = "Nabhoya"

// console.log(myName)
// console.log(anotherName)

let userOne = {
  name: "Chirag",
  age: 24,
  location: "Germany"
}

let userTwo = userOne

console.log(userOne.name)
userTwo.name = "Nabhoya"

console.log(userOne.name)
console.log(userTwo.name)