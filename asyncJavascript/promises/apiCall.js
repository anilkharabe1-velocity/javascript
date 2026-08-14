// fetch => is a method which used to make a api call
// fetch => return promise

fetch('https://jsonplaceholder.typicode.com/todos/56')
    .then((response)=>{
        return response.json(); // convert buffer stream into json format but it returns promise
    })
    .then((todos)=>{
        console.log("todos", todos)
        return fetch(`https://jsonplaceholder.typicode.com/users/${todos.userId}`)
    })
    .then((response2)=>{
        return response2.json();
    })
    .then((user)=>{
        console.log("user data:", user)
    })
    .catch((e)=>{
        console.log(e.message)
    })
    