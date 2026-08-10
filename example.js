// find the first non repeating character .
let str = "aabbccadd";

// indexOf + lastIndexOf

for(let i=0; i<str.length;i++){
    let currentChar = str[i];
    if(str.indexOf(currentChar) === str.lastIndexOf(currentChar)){
        console.log("first non repeating character is:", currentChar)
        break;
    }
}


