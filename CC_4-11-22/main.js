//Implement a function which multiplies two numbers.

const multiply = (num1, num2) => {
  return num1 * num2;
};
let resulMultiply = multiply(2, 5);
console.log(resulMultiply);

// other solutions

function multiply(a, b){
  return a*b;
}


function multiply(a, b){
  if(typeof a == 'number' && typeof b == 'number')
    return a * b;  
}