// window object
var a = 10;

const user = {
    name: "Rahul",
    age: 30,
    getDetails: ()=>{
        console.log("this:", this)  // this object refer to the surrounding lexical scope
        console.log("this.name", this.name)
        console.log("hey there", this.name)
    }
}

user.getDetails()
