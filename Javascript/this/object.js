const user = {
    name: "Rahul",
    age: 30,
    getDetails(){
        console.log("this:", this)  // this refers to object itself
        console.log("this.name", this.name)
        console.log("hey there", this.name)
    }
}

user.getDetails()