// named export
export interface User{
    id: number;
    name: string;
    email: string;
}

// default export
export default function createUser(name:string): string{
    return name;
}