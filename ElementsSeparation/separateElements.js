function separateElements(array){
	var arrayArranged = [[],[]]
    for (i = 0; i < array.length; i++){
		if (typeof array[i] !== 'number'){
			arrayArranged[0].push(array[i]);
    	} else {
			arrayArranged[1].push(Math.floor(array[i]));
        }
	}
	return arrayArranged[0].sort((a,b)=> a - b).concat(arrayArranged[1].sort());
}


module.exports = separateElements;