const custumPromise = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const user ={
                id:1,
                name:"Rahul"
            }
            if(user.id == 1){
                resolve(user)
            }else{
                reject("user not found")
            }
            
        }, 2000)
    });
}


// // consume the promise
// custumPromise()
//     .then((data)=>{
//         console.log("fullfiled the promise:", data)
//     })
//     .catch((error)=>{
//         console.log("error", error)
//     })

// async await
async function testing(){
    const response =  await custumPromise();
    console.log("response:", response)
}
testing()
