const path = require("path")

// This gets us the separator used when returning a file path, either "/" or "\" or "\\" and so on
console.log(path.sep)

// Getting a particular file path. While using this method, the file path returned will always be normalized
// for you. That basically means that it'll return the file path in a simple and standard format of returning
// file paths, regardless of how you specify the path while creating the method.
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath)

// This method is used to get the last portion of a path
const base = path.basename(filePath)
console.log(base)

// This is used to get the absolute path of the particular file you're looking for.
// By absolute path, it means when the path is returned, it's going to look like "C:\Users" and so on.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)
