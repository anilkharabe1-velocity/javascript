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

async function chaining(str){
    try {
        const response1 = await task1(str);
        const response2 = await task2(response1);
        const response3 = await task3(response2);
    } catch (error) {
        console.log("error:", error)
    }
}

chaining("how are you!!!")