function greet <A> (value: A):A{
    console.log("value:", value);
    return value;
}

function greetwithAny (value: any):any{
    console.log("value:", value);
    return value;
}

const result1 = greet(100);
const result2 = greet("Hello");
const result3 = greet(true);

const result4 = greetwithAny(100);
const result5 = greetwithAny("Hello");
const result6 = greetwithAny(true);
