// JSON=> JAvascript Object Notation / object

// object
let studentInfo = {
    name: "Aniruddha",
}


// json
const jsonString = '{"name": "Alice", "age": 25, "city": "London"}'; // string
console.log(jsonString)
// parsing => convert stringfy json into object
console.log("jsonString", jsonString)
const jsonObj = JSON.parse(jsonString)
console.log("jsonObj", jsonObj)



// stringify => convert object into a JSON-formatted string

let stringifyJSON = JSON.stringify(studentInfo);
console.log("stringifyJSON", stringifyJSON)