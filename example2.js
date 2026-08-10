let str = [
  "javascript",
  "java",
  "python",
  "java",
  "react",
  "javascript",
  "redux",
  "java",
];

let solution = {}

// for(let i=0; i < str.length; i++){
//     let currentItem = str[i];
//     if(solution[currentItem]){
//         solution[currentItem] += 1;
//     }else{
//         solution[currentItem] = 1;
//     }
// }

solution = str.reduce((acc, currentItem)=>{
        if(acc[currentItem]){
            acc[currentItem] += 1;
        }else{
            acc[currentItem] = 1;
        }
        return acc;
}, {})



console.log("solution", solution)

let expectedOp = {
  javascript: 2,
  java: 3,
  python: 1,
  react: 1,
  redux: 1
}

// expectedOp.javascript
// expectedOp["javascript"]

