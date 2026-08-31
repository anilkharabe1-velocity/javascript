// fetch('https://jsonplacehold.typicode.com/todos/56')
//     .then((response)=>{
//         return response.json();
//     })
//     .then((todos)=>{
//         console.log("todos", todos)
//         return fetch(`https://jsonplaceholder.typicode.com/users/${todos.userId}`)
//     })
//     .then((response2)=>{
//         return response2.json();
//     })
//     .then((user)=>{
//         console.log("user data:", user)
//     })
//     .catch((e)=>{
//         console.log(e.message)
//     })

async function apiCall() {
  try {
    let streamData = await fetch("https://jsonplaceholder.typicode.com/todos/56");
    let jsonFormatData = await streamData.json();
    console.log("response", jsonFormatData);

    let streamData2 = await fetch(`https://jsonplaceholder.typicode.com/users/${jsonFormatData.userId}`);
    let jsonFormatData2 = await streamData2.json();
    console.log("response2", jsonFormatData2);
  } catch (error) {
    console.log("error:", error)
  }
}
apiCall();
