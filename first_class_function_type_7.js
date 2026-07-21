let arr = [75, 24, 89, 76, 23, 12, 34];

function square(num) {
  return num * num;
}

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

console.log(calculate(arr, square));
console.log(calculate(arr, cube));
