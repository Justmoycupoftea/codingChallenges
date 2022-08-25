// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.
//P: will there be any neg nums?
//R: return num with the most digits, but if the nums are the same return the first one
//E: [2,1] -> [2]
//P: sort the array and return the first one, but if the nums are the same length return the first one instead like in example
function findLongest(array){
    let biggestNum = 0;

    for(var i = 0; i < array.length; i++) {
    
      if(array[i].toString().length > biggestNum.toString().length) {
        biggestNum = array[i];
      }
      
    }
    
    return biggestNum;
  }
