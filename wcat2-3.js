let fs = require("fs");
let inputArr = process.argv.slice(2);
console.log(inputArr);

// -s => convert for multiple line breaks to singular line break
// -b, -n
// filename

let optionsArr = [];
let fileArr = [];
for(let i=0; i<inputArr.length; i++){
    if(inputArr[i].charAt(0) == "-"){
        optionsArr.push(inputArr[i]);
    } else {
        fileArr.push(inputArr[i]);
    }
}

console.log(optionsArr);
console.log(fileArr);

let content ="";
for(let i=0;i<fileArr.length;i++){
    let filecontent = fs.readFileSync(fileArr[i]);
    content += filecontent +"\r\n";
}

console.log(content);

let buffer = content.split("\r\n");
console.log(buffer);
let isPresent = optionsArr.includes("-s");
if(isPresent == true){
    for(let i=1; i<buffer.length; i++){
        if(buffer[i] == "" && buffer[i-1]==""){
            buffer[i] = null;
            // buffer[i-1] = null;
        }
        else if(buffer[i]=="" && buffer[i-1]==null){
            buffer[i] = null;
        }
    }
}

let tempArr = [];

console.log(buffer);
for(let i=0; i<buffer.length; i++){
    if(buffer[i] != null && buffer[i] != ""){
        tempArr.push(buffer[i]);
    }
}

// buffer = tempArr;
console.log(tempArr);
// console.log(buffer);