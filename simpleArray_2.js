const arr = [76, 89, 88, 54, 23, 67, 14, 63, 92, 52, 33];

// count even numbers;
let countForEven = 0;
let countForOdd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    countForEven++;
  } else {
    countForOdd++;
  }
}

console.log("countForEven", countForEven);
console.log("countForOdd", countForOdd);

