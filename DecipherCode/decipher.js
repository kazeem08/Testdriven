function decipher(str) {
    console.log(str);
	var newString = [];
	for (var i = 0; i < str.length; i++){
		if (str.charCodeAt(i) > 64 && str.charCodeAt(i) <= 77){
            newString.push(String.fromCharCode(str.charCodeAt(i) + 13).toUpperCase());
        } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91){
            newString.push(String.fromCharCode(str.charCodeAt(i) + 19).toUpperCase());
    
		} else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) <= 109) {
            newString.push(String.fromCharCode(str.charCodeAt(i) - 19).toUpperCase());
        } else if (str.charCodeAt(i) > 109 && str.charCodeAt(i) < 123) {
			newString.push(String.fromCharCode(str.charCodeAt(i) - 13).toUpperCase());
		
		} else {
			newString.push(str[i]);
		}
	}

	return newString.join('');

    //Provide your solution here!!
}
module.exports = decipher;