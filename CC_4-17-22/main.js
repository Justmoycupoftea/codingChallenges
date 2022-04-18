// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.



function dutyFree(normPrice, discount, hol){
    return(Math.floor(hol / normPrice / discount * 100))
  }

  //other soln

  function dutyFree(normPrice, discount, hol){
    var saving = normPrice * discount / 100;
    return Math.floor(hol / saving);
  }

//more code wars

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

var replaceDots = function(str) {
    return str.replace(/\./g,'-');
  }

var replaceDots = function(str) {
    // added the \ to escape special characters
    // added the g so that replace is run for all occurences in the string
      return str.replace(/\./g, '-');
}

//more code wars

// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
    var output = [];
    for (var i=1; i<=n; i++)
    {
      output.push(i);
    }
    return output;
  }