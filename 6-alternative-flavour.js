// Example of an alternative syntax to use while working with modules
// This syntax can also be called "Export as you go". Why it can also be called that is due to the fact that
// we're exporting the module using module.exports at the time of the creation of the particular array below 
// and the particular object on line 8

module.exports.items = ['item1', 'item2']

const person = {
    name: 'bob',
}

module.exports.singlePerson = person