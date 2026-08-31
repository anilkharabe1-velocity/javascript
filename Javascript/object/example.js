let studentInfo ={
    name:"Ram",
    brotherName:"Bharat",
    address:{
        city: "Ayodhya",
        state:"UP"
    }
};


// const firstName = studentInfo.name;
// const city = studentInfo.city;
// const age = studentInfo.age;

// destructuring
const {name: firstName, age=60, brotherName="Laxman", address,  address: {city, state }} = studentInfo;

console.log("name:", name);
console.log("age", age);
console.log("brotherName", brotherName)
console.log("firstName", firstName)
console.log("address:", address)
console.log("city", city);
console.log("state", state);






