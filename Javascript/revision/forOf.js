let num = [10,20,30,40];

// array
for(let i of num){
    console.log("numbers", i)
}

// object

const user = {
    name:"Aniket",
    age: 24,
    city: "Pune"
}

// for-in

for(let key in user){
    console.log( `${key}: ${user[key]}` )
}


const numbers=[1,2,2,3,3,3,4,4,4,4];

let result = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

console.log(result);
//{ '1': 1, '2': 2, '3': 3, '4': 4 }

let result2 = numbers.reduce((acc, num) => {
    if(acc[num]){
        acc[num] += 1;
    }else{
        acc[num] = 1;
    }
    return acc;
}, {});

console.log("result2",result2)