// console.log("Good Morning");
// console.log("Good Morning");
// console.log("Good Morning");
// console.log("Good Morning");
// console.log("Good Morning");
// console.log("Good Morning");
// console.log("Good Morning");
// console.log("Good Morning");
// console.log("Good Morning");
// console.log("Good Morning");

// for / while / do while

for(let i=0; i<10; i++){
    if(i === 5){
        break;
    }
    console.log(`${i}:Good Morning using break statemenet`);
}

for(let i=0; i<10; i++){
    if(i % 2 == 0){
        continue;  // it skips current iteration when condition meets
    }
    console.log(`${i}:Good Morning using continue statemenet`);
}

// // for(initialization; condition; increment/decrement)

// // while(condition)

// let i=0;
// while(i < 10){
//     console.log(`${i}:Good Morning using while loop`);
//     i++;
// }

// // // do while

// i=10;
// do {
//     console.log(`${i}:Good Morning using do - while loop`);
//     i++;
// } while (i < 10)
