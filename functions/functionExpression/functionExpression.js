let year1 = 2000;

// function expression => we assign function to variable
// Higher order function
// JS => functional programming

// first declaration 
// then use it=> call it
let findLeapYearFunc =  function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
    return true;
  } else {
    console.log(`${year} is  not a leap year`);
    return false;
  }
}

let isLeapYear = findLeapYearFunc(year1);

if(isLeapYear){
    console.log("This is leap, you are eligible for 10% discount");
}
