function getUser(callback){
    setTimeout(()=>{
        console.log("user details received");
        callback({
            id:101,
            name:"Vishal"
        })
    }, 1000)
}

function getOrders(userId, callback){
    setTimeout(()=>{
        console.log("order received for:", userId);
        callback([
            {
                id: 1,
                product:"Laptop"
            },
            {
                id: 2,
                product:"Mobile"
            }
        ])
    }, 2000)
}

function getOrderDetails(orderId, callback){
    setTimeout(()=>{
        console.log("order details received for:", orderId);
        callback(
            {
                id: 1,
                status:"Delivered"
            }
        )
    }, 2000)
}

getUser((user)=>{
    getOrders(user.id, (orders)=>{
        getOrderDetails(orders[0].id, (details)=>{
            console.log("details:", details)
        })
    })
})

// promise/ await-async

// error first callback functions