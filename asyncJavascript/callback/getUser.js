function getUser(callback){
    setTimeout(()=>{
        const user = {
            id: 1,
            name: "Rahul"
        }
        callback(user)
    }, 2000)
}

getUser((user)=>{
    console.log("user:", user)
})