interface User{
    id: number;
    name: string;
    email: string;
    age: number;
}

type userPreview = Pick<User, 'id'|'name'>

const user : userPreview = {
    id: 101,
    name: 'Shalini',
}

console.log("user", user)
