function findSquare(number){
    return new Promise((resolve, reject)=>{
        resolve(number * number)
    })
}

findSquare(5)
    .then((response)=>{
        console.log("response", response)
    })
