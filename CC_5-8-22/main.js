// Complete the method that takes a boolean value and 
// return a "Yes" string for true, or a "No" string for false.

//spent 30mins looking for more complex answer
return bool ? 'Yes':'No'

//clean
let boolToWord = bool => bool ? 'Yes' : 'No';

//simple soln
function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
}

