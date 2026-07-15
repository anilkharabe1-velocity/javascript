const arr = [76, 89, 88, 54, 23, 67, 14, 63, 92, 52, 33];

let number = 89;
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === number) {
    found = true;
    break;
  }
}

console.log(found);
console.log(found ? "Found" : "Not Found");
