const words = ["Hello", "Good morning", "everyone"];

// number of characters
const totalCharacters = words.reduce((count, word)=>{
    return count += word.length; 
}, 0);

console.log("totalCharacters", totalCharacters)