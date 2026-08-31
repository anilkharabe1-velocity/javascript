let obj = {
}

console.log("obj.address", obj?.address);         // undefined
console.log("obj.address.city", obj?.address?.city);   // error
console.log("hello there")

let arr = [1,4 ,2 ,5 ,10];
let sort = arr.sort((a, b)=> b-a )
console.log("sort", sort)


for(let i=0; i<10; i++){
    if(i == 4){
        continue;
    }
    console.log(i)
}