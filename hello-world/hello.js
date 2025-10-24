const { add, sub } = require('./math');    // current directory
// require function to import 
const math = require('./math');
// const math = require("http");         // ctrl+space can make web servers with this package
// const math = require('fs');          // file system   can handle file (file handelling)
// const math = require('buffer')   // eg : built in package 

console.log("Hey there! I am js.");

// console.log(alert("hwy"));

// console.log(add(2, 5));

console.log("Math value is: " , math);              // here concat is not usedddd         That comma (,) tells console.log to print it as an object.

// const math = require('./math'); with thisss
// console.log("Math value is: " + math.addfn(2,4));                 // {}    empty object... we need to export

// console.log("Math value is: " + math.subfn(2,4));     

// console.log("Math value is: " + math.add(2,4));                 // {}    empty object... we need to export

// console.log("Math value is: " + math.sub(2,4)); 

// console.log("Math value is: " + math.add(432,443));                 // {}    empty object... we need to export

// console.log("Math value is: " + math.sub(24677,445));    



//  { add, sub }  with this 
console.log("Math value is: " + add(432,443));                 // {}    empty object... we need to export

console.log("Math value is: " + sub(24677,445));    