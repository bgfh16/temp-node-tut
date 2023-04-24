const {readFileSync, writeFileSync} = require("fs")

console.log("Start")
// Reading from the first.txt and second.txt files in the content folder
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")
console.log(first, second)

// Creating a new file called result-sync.txt and writing some text in it.
// If the file doesn't exist, Node will automatically create the file for us and if the file exists, all the
// data in the particular file we're trying to access will be overidden.
// To append to an existing file rather than overriding the file, you add '{flag:"a"}' to the
// pre-existing code below.
writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`, {flag:"a"})
console.log("Done with this task")
console.log("Starting the next one")
