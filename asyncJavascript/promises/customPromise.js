// promise => object => eventual completion (fulfilled) or failure (rejected) of async operations

// function getUser(callback){
//     setTimeout(()=>{
//         const user = {
//             id: 1,
//             name: "Rahul"
//         }
//         callback(user)
//     }, 2000)
// }

// getUser((user)=>{
//     console.log("user:", user)
// })

// custom promise

// custom promise creation
const custumPromise = new Promise((resolve, reject)=>{
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

console.log("custumPromise:", custumPromise)

// consume the promise
custumPromise
    .then((data)=>{
        console.log("fullfiled the promise:", data)
    })
    .catch((error)=>{
        console.log("error", error)
    })



