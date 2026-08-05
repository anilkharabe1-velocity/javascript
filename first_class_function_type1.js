function sayHello(){
    console.log("Good morning everyone");
}

function greetUser(func){
    func();
    console.log(func);//
    func();
    func();
    func();
    func();
    
}

greetUser(sayHello);