const marvel_heroes = ['Iron Man', 'Thor', 'Spider-Man' ]
const dc_heroes = ['Batman', 'Superman', 'flash']

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]) // Superman

// const all_heroes = marvel_heroes.concat(dc_heroes) // Concatenate two arrays
// console.log(all_heroes);

// const all_heroes2 = [...marvel_heroes, ...dc_heroes] // Spread operator to concatenate two arrays
// console.log(all_heroes2);

const another_array = [1, 2, 3, [4, 5], 7, [6, 7, [4, 5]]];

const flat_array = another_array.flat(2) // Flatten the array to 2 levels

console.log(flat_array); // [ 1, 2, 3, 4, 5, 7, 6, 7, 4, 5 ]



console.log(Array.isArray("Chirag"))
console.log(Array.from("Chirag"))
console.log(Array.from({name: "Chirag"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]