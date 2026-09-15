interface User_1{
    id: number;
    name?: string;
    email?: string;
}

const user_1 : User_1 = {
    id: 101
}

type CompleteType = Required<User_1>

const user_2 : CompleteType = {
    id: 102,
    name: "Shweta",
    email: "shweta@gmail.com"
}