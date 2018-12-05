function decipher(str) { 

    //Provide your solution here!!
    str  = str.toUpperCase();
    return str.split("")
              .map.call(str, function(charVar) {
              x = charVar.charCodeAt(0);
              
              if(x < 65 || x > 90) {
                return String.fromCharCode(x);
              }
              
              else if(x < 78) {
                return String.fromCharCode(x + 13);
              }
              
              else {
                return String.fromCharCode(x - 13);
              }
              }).join("");
  }


  module.exports = decipher;