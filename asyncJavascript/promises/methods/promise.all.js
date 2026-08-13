
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
            // reject("promise 3 rejected");
            resolve("promise 3")
        }, 3000)
    })
}

Promise.all([promise1(), promise2(), promise3()])
    .then((res)=>{
        console.log('res', res) // 5 seconds
    })
    .catch((error)=>{
        console.log("error:", error)  // 3 seconds
    })



    

