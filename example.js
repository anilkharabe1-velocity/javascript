const arr = [10,20,30,40,99,23,30];

const res =  Math.max(...arr);
console.log("res", res)


function manualSorting(...params){
    console.log("params:", params)// array
    return params.sort((a, b)=> a - b)
}

const sortedData =  manualSorting(1,34,4,39,20,10);
console.log("sortedData", sortedData)