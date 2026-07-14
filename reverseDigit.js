let num = 12345;

let reverse = 0;

while(num > 0){
    let digit = num % 10;
    console.log("digit", digit);
    reverse =  reverse * 10 + digit;
    num = Math.floor(num / 10)
}

console.log("reverse", reverse)