const http = require("http")

// When you're setting up the server, you have to pass in two parameters in the callback function
// namely req and res. Req represents the incoming requests from a client for example 
// and Res represents the response that you'll be sending back to that client.
const server = http.createServer((req,res)=>{
    // Most times "/" represents Home in a website, that's why we simply put that below, rather than writing
    // something like "/home"
    if(req.url === "/"){
        res.end("Welcome to our Homepage")
    }
    if (req.url === "/about"){
        res.end("Here is our short history")
    }
    res.end(` <h1>Oops!</h1> <p>Page not found.</p> <a href="/">Click me to go back to the Homepage</a> `)
})

// Setting up the port that the server will listen from. Note, just like in python, the port number isn't
// fixed, it's up to you to use whichever port number you'd like.
server.listen(5000)
