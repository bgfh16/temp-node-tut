// Every file in Node is a module (by default)

// This is the syntax for making use of the particular module we need at a particular moment
// After creating the variable and the assigning it to the require keyword, in between the bracket of the
// require keyword, we must always start with (./) since we're trying to locate a path
const names = require("./4-names")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavour")
require("./7-mind-grenade")

console.log(data)
sayHi("Daniel")
sayHi(names.John)
sayHi(names.Doe)
