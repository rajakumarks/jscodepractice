//Primitive Values are Undefined, null, Booleans(true or false), 
//numbers(-100, 3.14 & others), strings, symbols (uncommon)
//BigInts( uncommon & new) 
console.log(2);
console.log("hello");
console.log(undefined);

//Objects ({}) and Functions(x => x * 2) are also values, but they are not primitive. This makes them very special.
console.log({});
console.log([]);
console.log(x => x * 2);

console.log(typeof([])); // "object"
console.log(typeof(new Date())); // "object"
console.log(typeof(/(hello|goodbye)/)); // "object"