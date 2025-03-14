const name = "Chirag"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Pub-g');
console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(-4, 5)
console.log(anotherString);

const newStringOne = "  chirag  "
console.log(newStringOne);
console.log(newStringOne.trim());
 
const url = "https://www.google.com/chirag%20nabhoya"

console.log(url.replace('%20', '-'))

console.log(url.includes('chirag'))

console.log(gameName.split('-'))