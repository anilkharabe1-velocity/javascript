interface User{
    id: number;
    name: string;
    email: string;
    age: number;
}

type userPreview = Omit<User, 'id'>

const user : userPreview = {
    name: 'Shalini',
    email: 'shalini@gmail.com',
    age: 20
}

console.log("user", user)
