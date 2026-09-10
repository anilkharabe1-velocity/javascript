const user1: {
    id: number,
    name: string,
    age?: number  // optional
} = {
    id:101,
    name: "Rahul",
    age: 24
}

const user2: {
    id: number,
    name: string,
    age?: number  // optional
} = {
    id:102,
    name: "Rohit",
    age: 25
}

const user3: {
    id: number,
    name: string,
    age?: number  // optional
} = {
    id:103,
    name: "Amol",
    age: 24
}


type User = {
    readonly id: number,
    name: string,
    age?: number,
    city?: string
}


const user4: User = {
    id: 104,
    name: "Vishal",
    age: 25
}

const user5: User = {
    id: 105,
    name: "Mayur",
    age: 27,
    city: "Pune"
}
console.log("user5", user5);

type UserId = number;

let id: UserId = 20;
console.log("id", id)