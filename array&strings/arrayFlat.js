let input = [12,34,[87,28,[10,1]]];
// let input = "[12,34,[87,28,[10,1]]]";
try {
    if(Array.isArray(input)){
        let response = input.flat(Infinity);
        console.log("response", response)
    }else{
        throw new Error("Input is not valid array")
    }
} catch (error) {
    console.log("error:", error.message)
}


let expectedOut =  [10,20,30,40,50,60,70]
