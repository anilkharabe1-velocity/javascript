let words = ['Java', "React", 'Javascript', 'Mongodb', 'dot net'];
let longest = "";

for(let i=0; i< words.length; i++){
  if(longest.length < words[i].length){
    longest = words[i]
  }
}

console.log('longest', longest)

let longest2 =  words.reduce((longestWord, currentWord)=>{
  if(longestWord.length < currentWord.length){
    longestWord =  currentWord;
  }
  return longestWord
},'')

console.log("longest2", longest2)

// smallest word

let smallest =  words.reduce((smallestWord, currentWord)=>{
  if(smallestWord.length > currentWord.length){
    smallestWord =  currentWord;
  }
  return smallestWord
}, words[0])

console.log("smallest", smallest)