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

console.log(typeof myFunction)
