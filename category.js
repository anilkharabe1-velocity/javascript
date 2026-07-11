let arrOfCities = ["New Delhi", "Mumbai", "Pune", "Hyderabad", "Banglore", "Chandigarh", "Jammu"];

// south => true(Mumbai, Pune, Hyderabad, Banglore)
// north => false (New Delhi, Chandigarh, Jammu)
let userInput = prompt("Please give your city");


// switch => searching

if( [ "Mumbai", "Pune", "Hyderabad", "Banglore"].includes(userInput)){
    console.log("south city")
}else{
    console.log("north city")
}


// output = true / false
