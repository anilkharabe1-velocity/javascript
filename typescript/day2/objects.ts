const user: {
    readonly id: number,  // require
    name: string, // required
    age?: number  // optional
} = {
    id:101,
    name: "Rahul",
    // age: 24
}

// user.id = 102; 

console.log("user", user);
console.log("user.age", user.age);