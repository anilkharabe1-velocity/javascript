
function promise1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("promise 1 rejected");
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
            // reject("promise 3 rejected");
            resolve("promise 3")
        }, 3000)
    })
}

// first promise that settled
Promise.race([promise1(), promise2(), promise3()])
    .then((res)=>{
        console.log('res', res);
    })
    .catch((error)=>{
        console.log("error:", error)  // 3 seconds
    })
