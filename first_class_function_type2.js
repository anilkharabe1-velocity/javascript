let square = function () {
  console.log(5 * 5);
};

function cube() {
  console.log(5 * 5 * 5);
}

let squareOfSquare = () => {
  console.log(5 * 5 * 5 * 5);
};

let name = "Pooja";

function higherOrderFunction(nameParam, squareFunc, cubeFunc, squareOfSquareFunc) {
  console.log("I am in higher order function:", nameParam);
  squareFunc();
  cubeFunc();
  squareOfSquareFunc();
}

// square()
// cube()
// squareOfSquare()

higherOrderFunction(name, square, cube, squareOfSquare);
