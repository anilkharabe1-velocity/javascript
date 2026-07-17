let year1 = 2000;
let year2 = 2002;
let year3 = 2026;

let isLeapYear = findLeapYear(year1);

if(isLeapYear){
    console.log("This is leap, you are eligible for 10% discount");
}

// console.log("isLeapYear1", isLeapYear1)

// removed duplicate code
// code repetation removed => DRY => DO NOT REAPETE YOURSELF
// code reuse
// dynamic values used
// improve readability

// normal function or function declaration

function findLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
    return true;
  } else {
    console.log(`${year} is  not a leap year`);
    return false;
  }
}

