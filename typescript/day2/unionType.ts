// number / string
let userId : string | number | boolean = "101";
console.log("userId", userId)
console.log(typeof userId)

userId = 500;
console.log("userId", userId)
console.log(typeof userId);

userId = true; // valid



// type norrowing
function printId(id: number | string ): void{
    if(typeof id ==='string'){
        console.log(id.toUpperCase());
    }else{
        console.log(id.toFixed());
    }
}

// printId("UNDF-8237");
printId(101)


