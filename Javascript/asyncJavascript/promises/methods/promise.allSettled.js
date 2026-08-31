
function promise1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise 1");
        }, 2000)
    })
}

function promise2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise 2");
        }, 5000)
    })
}

function promise3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("promise 3 rejected");
            // resolve("promise 3")
        }, 3000)
    })
}

Promise.allSettled([promise1(), promise2(), promise3()])
    .then((res)=>{
        console.log('res', res);
        // throw new Error("want to throw error manually") // 5 seconds
    })
    .catch((error)=>{
        console.log("error:", error)  // 3 seconds
    })
