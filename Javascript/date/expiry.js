let currentDate = new Date();

let expiryDate = new Date("7/Aug/2026 23:59:59");

console.log("currentDate", currentDate);
console.log("expiryDate", expiryDate);

if(currentDate < expiryDate){
    console.log("not expired")
}else{
    console.log('expired')
}