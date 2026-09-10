
// discriminated union

type Admin ={
    role: "admin",
    permission: string[]
}

type User_1 = {
    role:"user",
    name: string
}

type Developer = {
    role: "Developer",
    permission: string[]
}

type Account = Admin | User_1 | Developer;

const account: Account = {
    role: "Developer",
    permission:["read", "write"]
}

const account_2: Account = {
    role: "user",
    name: "Sujata"
}

console.log("account:", account);
console.log("account_2:", account_2)

