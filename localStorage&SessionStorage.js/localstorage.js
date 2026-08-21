//upto 5 mb data can stored on browser

console.log("I am in browser");

let a = 10;


function storeInfoInLocal(){
    localStorage.setItem("userName","Yuvraj")
    console.log(localStorage.getItem("userName"));

    localStorage.setItem("password", 'lsjdflaycv');

    localStorage.removeItem("password");

    localStorage.clear();
}

storeInfoInLocal();

let obj = {
    user: "Karn",
    age: 30,
    city: "Pune"
}

localStorage.setItem("userName", JSON.stringify(obj));


let obj2 =JSON.parse(localStorage.getItem("userName"));
console.log("obj2", obj2);

let arr = ["Arjun", "Bhim", "Nakul"];
console.log("arr", arr)

localStorage.setItem("character", JSON.stringify(arr))

console.log(JSON.parse (localStorage.getItem("character")))
