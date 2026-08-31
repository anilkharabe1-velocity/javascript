console.log("A");

const promise = new Promise((resolve, reject) => {
    console.log("B");
    resolve("Success");
});

promise.then((result)=>{
    console.log(result)
});

console.log("C");



/*
A   A
C   B
B   C
Success
*/
