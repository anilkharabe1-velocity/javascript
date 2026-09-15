function pairParameters<T, U>(first: T, second: U):[U, T]{
    return [second, first]
}

const result = pairParameters(101, "Shweta");
console.log("result", result);