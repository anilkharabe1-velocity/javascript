interface UserInterface {
    readonly id: number,
    name: string,
    age?: number,
    city?: string
}

const user6: UserInterface = {
    id: 104,
    name: "Vishal",
    age: 25
}

console.log("user6:", user6);

interface Admin extends UserInterface {
    permission: string[]
}

const adminUser: Admin = {
    id: 110,
    name:"Saee",
    permission:["read", "write", "delete"]
}

// adminUser.id = 120;

console.log("adminUser", adminUser)