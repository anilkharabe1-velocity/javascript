let year = Number(prompt("Enter a year"));

// a year is a leap year if it is divisible by 4, 
// but not divisible by 100 unless it is also divisible by 400

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log(`${year} is a leap year`);
        }else{
            console.log(`${year} is  not a leap year`) 
        }
    }else{
        console.log(`${year} is a leap year`); // covered
    }
}else{
    console.log(`${year} is  not a leap year`) // covered
}

// more shorthand conditions

// 2024 yes => 0  && 24 !== 0
// 1900 no  => 0 && 0 !== 0 => false || 300 === 0  false
// 2000 yes => 0 && 0 !== 0 => false || 2000 % 400 = 0


if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is  not a leap year`)
}


// 2 => flag = true / false
// []

