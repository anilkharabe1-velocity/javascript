// input => string
function task1(input){
    console.log("input for task1: ", input)
    
    return new Promise((resolve, reject)=>{
        if(typeof input === "string"){
            resolve(input.length)
        }else{
            reject("input of task1 must be string")
        }
    })
}

function task2(input){
    console.log("input for task 2: ", input);

    return new Promise((resolve, reject)=>{
        if(typeof input === "number"){
            resolve(input * input)
        }else{
            reject("input of task2 must be number")
        }
        
    })
}

function task3(input){
    console.log("input for task 3: ", input);

    return new Promise((resolve, reject)=>{
        resolve(input * input * input)
    })
}

let input = 5;

task1(input)
    .then((response1)=>{
        console.log("response1", response1);
        return task2(response1)
    })
    .then((response2)=>{
        console.log("response2", response2);
        return task3(response2)
    })
    .then((response3)=>{
        console.log("response3", response3)
    })
    .catch((error)=>{
        console.log("error:", error)
    })


// not recommended code
// task1("how are you!!")
//     .then((res1)=>{
//         console.log("response1:", res1);
//         task2(res1)
//             .then((response2)=>{
//                 console.log("response2", response2)
//                 task3(response2)
//                     .then((response3)=>{
//                         console.log("response3", response3)
//                     })
//             })
//     })


