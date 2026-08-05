const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum of square of even numbers
// even => filter [2,4,6,8,10]
// square => map[4, 16, 36, 64, 100]
// addition => reduce = 220

const evens = numbers.filter((num) => {
  return num % 2 == 0;
});
console.log("evens", evens);

const squares = evens.map((num) => {
  return num ** 2;
});

console.log("squares", squares);

const addition = squares.reduce((acc, num) => {
  return (acc += num);
}, 0);

console.log("addition", addition);

// inhanced version using method chaining

const result = numbers
  .filter((num) => {
    return num % 2 == 0;
  })
  .map((num) => {
    return num ** 2;
  })
  .reduce((acc, sqr) => {
    acc += sqr;
    return acc;
  }, 0);
console.log("result", result);

// short hand
const result2 = numbers
  .filter((num) => num % 2 == 0)
  .map((num) => num ** 2)
  .reduce((acc, sqr) =>  acc += sqr, 0);


console.log("result2", result2);