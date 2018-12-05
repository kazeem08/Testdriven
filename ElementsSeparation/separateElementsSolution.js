function collect(array){
    let number = [];
    let character = [];
    for(let element of array){
        if(typeof element === 'number'){
            number.push(element);
            number.sort();
        }
        else{
            character.push(element);
        }
        
    }
    return character.concat(number);
}

console.log(collect([1, 3, 8, 'a', 5, '', 6]));

module.exports = collect;