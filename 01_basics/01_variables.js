const accountId = 144553
let accountEmail = "chirag@gmail.com"
var accountPassword = "password123"
accountCity = "Mumbai"
let accountState;

// accoutnId = 2 // not allowed

accountEmail = "chirag3@gmail.com"
accountPassword = "password456"
accountCity = "Pune"

console.log(accountId)

/*
Prefere not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])