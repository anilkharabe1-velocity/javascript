// 1st interval
let obj1 = {
    name: "Arjun",
    city: "Pune"
}

let obj2 = obj1;
console.log("obj1", obj1);
console.log("obj2", obj2);

// 2st interval

obj1.city = "Mumbai"


console.log("after interval obj2:", obj2)

obj2.name = 'Karn';
console.log(obj1.name)


let arr = [1,2,3,4];
let arr2 = arr;
arr2[2] = 10;
console.log("arr", arr);
console.log("arr2", arr2)