let message: string = "Good morning";
let fullName: string = "Vishal";
let age: number = 20;
let isStudent: boolean = true;

// age = "20"; wrong way

console.log("message", message);
console.log("fullName", fullName);
console.log("age", age);

let globalLet: any = "hello there";
globalLet = globalLet.toUpperCase();
console.log("globalLet", globalLet);

globalLet = 20;
globalLet = true;
globalLet = [2, 3, 5];

// unknown
let value: unknown = "hello";
value = 10;
value = "Hello";
value = true;

if (typeof value === "string") {
  value = value.toUpperCase();
  console.log("value:", value);
}

// null / undefined

let nullType: null = null;
let undefinedType: undefined = undefined;

// array

let numbers: number[] = [10, 20, 30, 40];
let otherNumbers: Array<number> = [10, 20, 30, 40];
console.log("numbers:", numbers)
console.log("otherNumbers", otherNumbers)


let names : string[] = ["Mayur", "Vishal", "Yogesh"];
console.log("names", names);

// object 
// {
//     id:1,
//     name:"Rohit"
// }

let user: {
    id: number,
    name: string
} = {
    id : 1,
    name:"Rohit"
}

console.log("user", user)

// array of object

let users: {
    id: number,
    name: string
}[] = [
    {
        id:1,
        name:"Rahul"
    },
        {
        id:2,
        name:"Ajinkya"
    }
]

// tuple => similar to array
let student: [number, string] =  [ 101, "Karn" ];
student.push(20);
console.log("student",student)


