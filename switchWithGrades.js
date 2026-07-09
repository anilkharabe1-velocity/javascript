let marks = Number(prompt("enter your marks"));

// if(marks > 35){
//     console.log("you are passed")
// }else{
//     console.log("you are failed")
// }


// ternary operator
marks > 35 ?  console.log("you are passed") :  console.log("you are failed");

// isLogged ? <Dashboard /> : <Login />   


switch(true){
    case marks >=81:
        console.log("Grade A+");
        break;
    
    case marks >=66:
        console.log("Grade A");
        break;

    case marks >=51:
        console.log("Grade B");
        break;

    case marks >=36:
        console.log("Grade C");
        break;
    
    default:
        console.log("Failed")
}



// if(marks >=81 ){
//     ;
// }else if(marks >= 66 && marks <=80){
//     console.log("Grade A")
// }else if(marks >= 51 && marks <=65){
//     console.log("Grade B")
// }else if(marks >= 36 && marks <=50){
//     console.log("Grade C")
// }else{
//     console.log("Failed")
// }