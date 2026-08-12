function login(user){
    return new Promise((resolve, reject)=>{
        if(user.email ='vishal@gmail.com' && user.password === 'password'){
            resolve({
                status: true,
                id: 1,
                name: "Vishal",
                email: "vishal@gmail.com"
            })
        }else{
            reject({
                status: false,
                message:"email or password is wrong"
            })
        }
    })
}

function orderList(userId){
    return new Promise((resolve, reject)=>{
        if(userId === 1){
            resolve([
                {
                    orderId: 1,
                    item:"Laptop"
                },
                {
                    orderId: 2,
                    item:"Mobile"
                },

            ])
        }else{
            reject({
                status: false,
                message: `orders not found for user: ${userId}`
            })
        }
    })
}


let user = {
    email:'vishal@gmail.com',
    password:'password'
}

login(user)
    .then((response)=>{
        console.log("response", response);
        return orderList(response.id)
    })
    .then((response2)=>{
        console.log("response2", response2)
    })
    .catch((error)=>{
        console.log("error:", error)
    })