import { User } from "./user.js";
import createUser from "./user.js";

const user : User = {
    id: 104,
    name: "Shubhangi",
    email: "shubhangi@gmail.com"
}

let name = createUser("Maithili");
console.log("new created name:", name)

console.log("user:", user)