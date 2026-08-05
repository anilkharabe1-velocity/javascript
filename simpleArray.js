const arr = [10, 20, 30, 40, 50]; // length = 5

// print
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// reverse
console.log("In Reverse Order");
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

console.log("Method:", arr.reverse());

// sum of all elements

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log("Sum of elements of arr:", sum);

// average of all the elements
// farmula = avg = sum of all the elments / num. of elements

let avg = sum / arr.length;
console.log("average:", avg);

