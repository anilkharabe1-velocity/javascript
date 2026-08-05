// higher order function
function calculate(callbackFunc) {
  console.log("callbackfunc is calling");
  callbackFunc();
}

let a = 10;
let b = 5;

calculate(() => {
  console.log(a + b);
});

calculate(() => {
  console.log(a - b);
});

calculate(() => {
  console.log(a / b);
});

calculate(() => {
  console.log(a * b);
});
