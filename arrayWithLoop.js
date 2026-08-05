let studentList = ['Amar', 'Shubham', 'Shweta', 'Shubhangi', 'Madhu']; //5

// uppercase

for(let i=0; i < studentList.length; i++){
    let currentElement = studentList[i]; 
    console.log(currentElement.toUpperCase());
    if(currentElement == 'Shweta'){
        break;
    }
}

