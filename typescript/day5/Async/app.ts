async function getMessage(): Promise<string> {
    return "Hello"
}

async function getNumber(): Promise<number>{
    return 100;
}

interface User{
    id: number;
    name: string;
    email: string;
}

async function getUser(): Promise<User>{
    return {
        id: 102,
        name: "Manoj",
        email: "manoj@gmail.com"
    }
}

const userData = getUser();
console.log("userData", userData)


const str =  getMessage();
console.log("str", str);

const num = getNumber();
console.log("num", num)