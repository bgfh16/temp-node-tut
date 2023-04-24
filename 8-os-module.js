// Syntax used to interact with a built-in module
const os = require("os")

// Info about current user
const user = os.userInfo()
console.log(user)

// Method to return the system uptime (how long the system has been running) in seconds
console.log(`The system uptime is ${os.uptime} seconds`)

// Getting some more system related information
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(), // Total Memory
    freeMem: os.freemem(), // Free Memory
}
console.log(currentOS)
