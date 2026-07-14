// 2 - 100

for(let x = 2; x <= 100; x++){
    let isPrime = true;

    for(let i=2; i < x; i ++){
        if(x % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(x)
    }
}

