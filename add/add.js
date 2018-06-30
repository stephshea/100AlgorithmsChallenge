function add(param1, param2) {
  return param1 + param2;
}

function add2(...param1) {
  var result = 0;
  param1.forEach(element => {
    result += element;
  }); 
  return result;
  }

// function add2(param1) {
//   var result = 0;
//   for(var i = 0; i < arguments.length; i++){
    
//   result +=arguments[i];
//   }
// return result;
// }

console.log(add(1, 2));
console.log(add(3, 2));
console.log(add2(1,2,3,4,5));
console.log(add2(2,3));
