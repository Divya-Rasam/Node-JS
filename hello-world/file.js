const fs = require("fs");             // built in module      // importing fs file
// File handelling - operations on files like creating , reading
// fs file system is needed for it



// // Sync...
// fs.writeFileSync('./test.txt', "Hey world");     // it will create a file 

// Async...
// fs.writeFile('./test.txt', "Hey world Asy nc", (err) => {});




// Sync...          // result is returning here, we can do try and catch to handle error here
// const result = fs.readFileSync('./contacts.txt', 'utf-8');    // it will read the file ... need to give encoding
// console.log(result);  


// Async...       // it expects a cb fn in which he will give error or result, it doesnt return anything.... same goes to the above sync async (writeFile)
fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('Error', err); 
    } else {
        console.log(result);  
    }
});    
// it will read the file ... need to give encoding.... 
// here needed callback if error and for a result 2 para... this doesnt return
 



// Append data not overrride
fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());
fs.appendFileSync('./test.txt', `${Date.now()} Hey there\n`);




// // Copying a file
// fs.cpSync("./test.txt", "./copy.txt");

// // Deleting / unlinking a file
// fs.unlinkSync("./copy.txt");


// Status of a file
console.log(fs.statSync("./test.txt"));

// Checking if its a file
console.log(fs.statSync("./test.txt").isFile());

// Making a directory
// fs.mkdirSync('my-docs');

fs.mkdirSync('my-docss/a/b', {recursive: true});
