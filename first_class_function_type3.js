
let name = "Pooja";

function higherOrderFunction(nameParam, squareFunc) {
  console.log("I am in higher order function:", nameParam);
  squareFunc();
}

higherOrderFunction(name, ()=> {
  console.log(5 * 5);
})

