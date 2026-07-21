let arr = [75, 24, 89, 76, 23, 12, 34];


function getSquare(arr) {
  let arrOfSquare = [];
  for (let i = 0; i < arr.length; i++) {
    let square = arr[i] * arr[i];
    arrOfSquare.push(square);
  }
  return arrOfSquare;
}

function getCube(arr) {
  let arrOfCube = [];
  for (let i = 0; i < arr.length; i++) {
    let cube = arr[i] * arr[i] * arr[i];
    arrOfCube.push(cube);
  }
  return arrOfCube;
}

const squareResult = getSquare(arr)
const cubeResult = getCube(arr)


console.log("getSquare", squareResult);
console.log("getCube", cubeResult);
