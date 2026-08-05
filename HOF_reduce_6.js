let words = ["Java", "React", "Javascript", "React", "Java"];

count = {};

count = words.reduce((acc, word)=>{
  console.log("word", word)
  if(acc[word]){
    acc[word] += 1;
  }else{
    acc[word] = 1;
  }
  return acc;
}, {})

console.log("count", count)