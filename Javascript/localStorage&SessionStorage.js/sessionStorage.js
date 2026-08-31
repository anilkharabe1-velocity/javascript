//upto 5 mb data can stored on browser

console.log("I am in browser");

let a = 10;

function storeInfoInLocal(){
    sessionStorage.setItem("userName","Yuvraj")
    console.log(sessionStorage.getItem("userName"));

    sessionStorage.setItem("password", 'lsjdflaycv');

    sessionStorage.removeItem("password");

    sessionStorage.clear();
}

storeInfoInLocal();

let obj = {
    user: "Karn",
    age: 30,
    city: "Pune"
}

sessionStorage.setItem("userName", JSON.stringify(obj));


let obj2 =JSON.parse(sessionStorage.getItem("userName"));
console.log("obj2", obj2);

let arr = ["Arjun", "Bhim", "Nakul"];
console.log("arr", arr)

sessionStorage.setItem("character", JSON.stringify(arr))

console.log(JSON.parse (sessionStorage.getItem("character")))
