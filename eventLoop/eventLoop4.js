console.log("1");

Promise.resolve().then(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

    console.log("4");
});

Promise.resolve().then(() => {
    console.log("5");
});

console.log("6");
// 1 6 2 4 3 5
// 1 6 2 4 5 3  correct one
// 1 6 5 2 4 3
