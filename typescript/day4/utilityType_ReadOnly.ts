interface User{
    id: number;
    name: string;
}

const user: User = {
    id: 101,
    name: "Mayuri",
}

type ReadOnlyUser = Readonly<User>

const readOnlyUser_1: ReadOnlyUser = {
    id: 102,
    name: "Mayur",
} 

// readOnlyUser_1.id = 102;
