// ... => rest/spread

// rest operator => collect values => function parameters
// spread operator => to spread the values => array/ objects 

// rest => collects multiple arguments => convert into single array(or object)

function showValues( a, b, ...params) {
    console.log("a:", a); //10, 
    console.log("b:", b); // 20
    console.log(params); // [30,40,50] // array destructing
}

showValues(10, 20, 30, 40, 50)

function sum(...params) {
    console.log("params:", params);
    // reduce
    return params.reduce((acc, currentElement) => {
        return acc = acc + currentElement;
    }, 0)
}

// const response = sum(10, 20, 30, 40, 50)
// console.log("response", response)




