let now = new Date();
console.log("now:", now);

// specify date using string
let d1 = new Date("07/Aug/2026")// USA format mm/dd/yyyy
console.log("d1:", d1)


// Jan - 0, Feb - 1
let d2 = new Date(2026, 7, 7, 8, 45, 0);
console.log("d2:", d2)