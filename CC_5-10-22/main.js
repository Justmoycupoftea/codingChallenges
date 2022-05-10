// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

//my incorrect answer
function setAlarm(employed, vacation){
if(employed == true && vacation == false){
    return false //if work and no vacay TRUE u gotta go to work foo
}else if(employed == true && vacation == false ){
    return true //if work and vacay FALSE no alarm
}else{return false} //always set alarm if work
}

//what is was suppose to be
function setAlarm(employed, vacation){
    if(employed == true && vacation==true){
         return false;
     }else if(employed == false && vacation == false){
         return false;
     }else if(employed == false && vacation == true){
         return false;
     }else {
         return true;
}
}
//simple soln
function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
}

//anotha one since i did bad

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2); //It's the base of the number we will parse: 2, instead of the default 10.
//join() join up the array elements in a string, and parseInt() convert the array in decimal,
// the second value 2 in the method represent the decimal number system
// The join('') method merges all the array elements into a string. 
// The parseInt(num, base) convert the 'num' represented in base 'base' into a decimal base. For example

// if arr = [1, 0, 1] then arr.join('-') --> '1-0-1', arr.join('X') --> '1X0X1', arr.join('') --> '101'
// parseInt('1ea', 16) --> 490, parseInt('11', 8) --> 9, parseInt('101', 2) --> 5
