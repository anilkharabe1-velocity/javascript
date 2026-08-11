console.log("start");

const apiRespose = fetch('https://jsonplaceholder.typicode.com/todos/1');

apiRespose
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log("res", res)
})
.catch((err)=>{
    console.log('err: issue with api hit',)
})

console.log("end")