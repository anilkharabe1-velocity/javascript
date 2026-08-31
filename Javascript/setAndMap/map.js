// map => is colletion of key-value pairs 
// similar to object
let obj ={
    
}

obj.name = "Mayur";
obj.age = 30;


console.log("obj", obj)
console.log(obj.name)

const map = new Map();
// set
map.set("name", "Vishal");
map.set("age", 20)


console.log("map", map)

//get 
console.log(map.get("age"))
console.log(map.has("name"))
console.log(map.has("address"))