function introduce(city){
    console.log("this:", this);
    console.log(`Hey there, Iam ${this.name} and city is ${city}`)
}

const student1 = {
    name: "Mayur"
}

introduce.call(student1, "Pune")

introduce.apply(student1, ["Mumbai"])

introduce.bind(student1, "Hyderabad")()