interface User{
    id: number;
    name: string;
    email: string;
}

const user: User = {
    id: 101,
    name: "Mayuri",
    email: "mayuri@gmail.com"
}

// partial
type UpdatedUser = Partial<User>;
//  {
//     id?: number,
//     name?: string,
//     email?: string
// }
const updated: UpdatedUser = {
    name:"Rahul"
}





