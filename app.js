// npm --version 
// This can be used on the terminal to check the version of npm that is currently installed the system.
// Keep in mind that the version of npm may not be the same as the version of node currently installed
// and that is still fine.

// npm install <packageName> 
// This command is the command for installing packages as local dependencies.
// Installing a package as a local dependency means that the package will only be available 
// for use in the project that it was installed in.

// npm install -g <packageName> 
// This command is the command used for installing packages as global dependencies.
// Installing a package as a global dependency means that the package will be available 
// for use in any project we choose to make use of it in.

// package.json
// This is a manifest file that stores import information about our project/package
// To create the package.json file, there are 3 different approaches that can be used
// "The manual approach" - In this approach, you manually create package.json file in the root folder
// and each property.
// Using "npm init" - This approach automates the creation of package.json for you step by step and each
// step can be skipped by pressing enter as you go on. By step by step, it'll take you from the naming
// of the package, down to the final package creation point.
// Using "npm init -y" - This creates the package.json automatically for you as well but with everything set
// up as default without going through everything step by step like you would when using the npm init
// approach.


// How to start using an external package after it has been installed by you
const _ = require("lodash")

// Example of a loadash method to show that we can make use of our installed package
const items = [1, [2, [3, [4]]]]
// The _.flattenDeep method in loadash is used to flatten nested arrays.
// An array is called a nested array when there are arrays inside the array as its elements.
// Flattening an array is a process in which the number of dimensions of an array is reduced.
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log("Hello People")

// npm install <packageName> --save-dev
// This is used to install a package as a dev dependency.
// Check your Node js and Express js Tutorial word file for the explanation of dev dependencies)

// npm uninstall <packageName>
// This is used to uninstall a package
// The alternative will be to manually delete the node_modules folder and the
// package-lock.json file in our root directory. After that, we can come to our package.json,
// delete the dependency that made us delete the node_modules folder from the dependency
// list and type in "npm install" to do aclean install of the dependency or dependencies 
// we're left with after all that.
