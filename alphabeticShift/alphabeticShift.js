
function alphabeticShift(inputString) { 
    // var inputShifted = inputString.split('');
    var newWord = [];
    inputString.split("");
    for(var i = 0; i < inputString.length; i++){

        if(inputString.charCodeAt(i) === 122){
            newWord.push(String.fromCharCode(97));
        }
        else {
            newWord.push(String.fromCharCode(inputString.charCodeAt(i) + 1));
        }
    }
return newWord.join("");    
    } 
console.log(alphabeticShift('crazy'));
