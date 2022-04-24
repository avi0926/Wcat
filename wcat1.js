let fs = require("fs");
let inputArr = process.argv.slice(2);
console.log(inputArr);

let buffer ="";
for(let i=0;i<inputArr.length;i++){
    let filecontent = fs.readFileSync(inputArr[i]);
    buffer += filecontent + "\n\n";
}

console.log(buffer);