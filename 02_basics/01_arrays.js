// array


const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myHeroes = ['Spider-Man', 'Iron Man', 'Captain America', 'Thor', 'Hulk']

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)

// console.log(myArr2[0]);

// array methods

// myArr.push(11) // add to the end of the array
// myArr.push(12)
// myArr.pop() // remove from the end of the array
// myArr.unshift(13) // add to the beginning of the array
// myArr.shift() // remove from the beginning of the array
// console.log(myArr.includes(15)); // check if the array includes a value
// console.log(myArr.indexOf(15)); // get the index of a value

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(0, 5) // slice the array from index 0 to 5 (not included)

console.log(myn1); // [0, 1, 2, 3, 4]
console.log("B", myArr);

const myn2 = myArr.splice(0, 5) // splice the array from index 0 to 5 (included)
console.log("C", myArr);
console.log(myn2); // [0, 1, 2, 3, 4]