console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });
}, 0);                                  //  1 7 4 2 6 3 5
                                        //  1 7 4 2 3 6 5
Promise.resolve().then(() => {          //  1 7 4 2 3 6 5
    console.log("4");

    setTimeout(() => {
        console.log("5");
    }, 0);
});

setTimeout(() => {
    console.log("6");
}, 0);

console.log("7");  