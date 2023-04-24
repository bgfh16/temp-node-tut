const {readFile, writeFile, read} = require("fs")

// When working with the asynchronous file system module, we need to provide a callback.
// A callback is a function which is to be executed after another function has finished its execution.

console.log("Start")
readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err){ // Returning the error and displaying it on the console if an error occurs during the execution
        console.log(err)
        return
    }
    const first = result
    readFile("./content/second.txt", "utf8", (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile("./content/result-async.txt", `Here is the result: ${first}, ${second}` ,(err, result)=>{
         if(err){
            console.log(err);
            return;
         }
         console.log("Done with this task")
        })
    })
})
console.log("Starting the next one")
