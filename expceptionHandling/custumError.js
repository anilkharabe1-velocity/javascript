let age = prompt("Enter Your Age");
age = parseInt(age);

try {
    if(age > 150 || age < 0){
        throw new Error("Invalid Age") 
    }
} catch (error) {
    console.log("error", error)
}

console.log("your age is", age)
