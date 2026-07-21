let arr = [75, 24, 89, 76, 23, 12, 34];

let square = (num) => {
  return num * num;
};

function cube(num) {
  return num ** 3;
}

function calculate(arr, callbackFunc) {
  let response = [];
  for (let i = 0; i < arr.length; i++) {
    let result = callbackFunc(arr[i]);
    response.push(result);
  }
  return response;
}

let result1 = calculate(arr, (num) => {
  return num * num;
});

let result2 = calculate(arr, (num) => {
  return num ** 3;
});

console.log(result1);
console.log(result2);
