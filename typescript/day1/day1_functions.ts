function add(a: number , b: number): number{
    return a + b;
}

function greetMe(name?: string, age: number = 20): void{
    console.log("good morning ", name)
    console.log("my age is :", age)
}

greetMe("Mayur", 30)

console.log(add(10,20)) 

const substract = (a: number, b: number): number=>{
    return a-b
}
console.log(substract(20, 10)) 