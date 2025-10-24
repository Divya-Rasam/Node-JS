// function add (a, b) {
//     return a + b;
// }

// function sub (a, b) {
//     return a - b;
// }


// // module.exports = "Divya";

// // module.exports = add;
// // module.exports = sub;                 // overrides the value

// // module.exports = 1;
// // module.exports = 2; 


// module.exports = {
//     add,
//     sub
// }

// module.exports = {
//     addfn : add,
//     subfn: sub
// }


exports.add = (a, b ) => a + b;     // add is a property we can give any name

exports.sub = (a, b ) => a - b;

// module.exports can only be used as once in a file
// exports.module can be as many we want