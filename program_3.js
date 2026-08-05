/**
    1 2 3 4
    5 6 7 8 
    9 10 11 12
    13 14 15 16
 */

let row ="";
let current = 1;
for(let i=1; i<=4; i++){
    row ="";
    for(let j=1; j<=4; j++){
        row += current+" "
        current++
    }
    console.log(row)
}