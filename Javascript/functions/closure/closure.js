function helloFunction(){
    return function(){
        console.log("I am coming from helloFunction")
    }
}


let returnedFunc = helloFunction();
returnedFunc()

helloFunction()();