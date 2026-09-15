function getFirst<DataType>(items: DataType[]): DataType{
    return items[0];
}

const number = getFirst([10,20,30,40]);
console.log("number", number);

const str = getFirst(['Aniket', 'Shweta', 'Saee']);
console.log('str:', str);