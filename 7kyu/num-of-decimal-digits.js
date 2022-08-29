// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

//P:will there be any neg nums?
//R: return num of digits of intial num
//E: 9 --> 1
//P: return length of the string

//need to turn n into string then it'll return length

function digits(n) {
    return n.toString().length;
  }

//another soln
function digits(n) {
    return `${n}`.length;
  }