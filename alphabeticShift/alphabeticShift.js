function alphabeticShift(inputString) {
    
    // var inputShifted = inputString.split('');
    newString = inputString.split("");
    for (var i = 0; i < newString.length; i++) {
      
       var newAb = String.fromCharCode(newString.charCodeAt(i) +1);
var newablist= newablist.push(newAb);
    } 
    // return inputShifted.join('');
    return newablist;
}
console.log(alphabeticShift('crazy'));
