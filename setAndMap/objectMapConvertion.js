const obj = {
    name:"Abhilash",
    age: 30
}

const map = new Map(Object.entries(obj))

// map.set({address:"pune"}, "testing address key")

console.log("map", map)

const obj2 = Object.fromEntries(map);
console.log("obj2:", obj2)
