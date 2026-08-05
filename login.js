// username = NarendraModi , password = AmitShah

let username = prompt("Enter your username");
let password = prompt("Enter your password");

if(username === "NarendraModi" && password === "AmitShah"){
    console.log("Welcome to home page");
}else{
    console.log("Try again. Your username or password is incorrect")
    if(username !== "NarendraModi"){
        username = prompt("Enter your username again");
    }

    if(password !== "AmitShah"){
        password = prompt("Enter your password again");
    }

    if(username === "NarendraModi" && password === "AmitShah"){
        console.log("Welcome to home page");
    }else{
        console.log("Beta, tumase na ho payega");
    }

}
