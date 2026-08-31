const user = {
    name: "Sujata",
    address: {
        city: "Pune",
        state: "MH"
    }
}

console.log(user?.address?.city)// pune
console.log(user?.address?.laneNum); // undefined

// if(user.contact && user.contact.phone){
//     console.log(user.contact.phone)
// }

console.log(user?.contact) // undefined
console.log(user?.contact?.phone); // error => undefined

console.log("hello there")