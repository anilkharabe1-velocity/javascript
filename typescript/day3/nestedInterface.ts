interface Address {
        city: string,
        state: string,
        pincode: number
}

interface UserData {
    id: number,
    name: string,
    address: Address
}

const users_ : UserData[] = [{
    id: 101,
    name: "Saee",
    address: {
        city: "Pune",
        state: "MH",
        pincode: 411011
    }
}]

const user_ : UserData = {
    id: 101,
    name: "Saee",
    address: {
        city: "Pune",
        state: "MH",
        pincode: 411011
    }
}


function getUserData(userData: UserData): Address {
    return userData.address;
}

getUserData(user_)

console.log("user_:", users_)