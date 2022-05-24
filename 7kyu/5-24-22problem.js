// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//given an array of numbers all are same expect 1 number
//P:will num be neg? will num have decimal?
//R: returning the number that doesn't match with the others
//E: 1,1,2 we want 2 to be returned
//P: use filter? find method?

function stray(numbers) {
    return numbers.find((e) => numbers.filter((v) => v===e).length === 1)
    //e parameter put in to generate a number, filter for v a new parameter, is v === e they are the same
    //return the number that isn't the same
  }