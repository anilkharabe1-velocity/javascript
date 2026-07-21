// higher order function
function calculate(callbackFunc) {
  console.log("callbackfunc is calling");
  callbackFunc();
}

let a = 10;
let b = 5;

let sum = () => {
  console.log(a + b);
};

let substract = () => {
  console.log(a - b);
};

let division = ()=>{
    console.log(a/b);
}

let multiplication = ()=>{
    console.log(a * b)
}

calculate(sum);
calculate(substract);
calculate(division);
calculate(multiplication);

calculate(sum)



