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
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
}
//other soln
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}
//using sort
function stray(numbers) {
    numbers = numbers.sort();
    return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
}