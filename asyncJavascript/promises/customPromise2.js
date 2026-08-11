const buyCadbury = new Promise((resolve, reject)=>{
    isCadburyAvailable = false;
    
    if(isCadburyAvailable){
        resolve("this is your cadbury")
    }
    else{
        reject("sorry, we do not have cadbury right now")
    }
}) 

buyCadbury
.then((data)=>{
    console.log("data:", data)
})
.catch((err)=>{
    console.log("err:", err)
})

// promise, resolve, reject, then, catch