// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//the arrs wont be empty? will there be an equal amount of nums? taking in 2 diff values of array, there will atleast num in array and never empty
//any special characters, anything funny business, do i expect float values or neg nums, will there be a num that is 'two' is 2
//if num was 2 i would expect two even nums? [2,4], 2

//return last even pickles in the array
//arr will be spit out as return [] -> last even nums

function nEvenNums(arr, num){
    //filter out odd nums
    //n last nums from the filtered array - slice (-n)
    return arr.filter(n => n % 2 === 0).slice(-num)
    //filtering through array to determine even values

    //should i remove comments is this what the team does?
    //is the team familiar with ES6
    //do you prefer one liners?

    //is this more inline with your with your style?
    const nEvenNums = (arr, num) => arr.filter(n => n % 2 === 0).slice(-num)

    //for - grabbing even nums O(n)
    //for -grabb total from right O(n)

}

//filter out odd nums
function evensOnly(arr, num){
    //second parameter num is the count to the amount of even nums
    return arr.filter( n => n % 2 === 0).slice(-num)
    //use slice to copy all the even nums
}

function evens(arr, num){
    //filter out for even nums only
    return arr.filter(n => n % 2 === 0).slice(-num)
    //slice nums to keep original order or array
}

//i wanna get rid of all odd nums and be left with only even nums right bob?
//u only want me to get the last 3, '4,6,8' ok bob?
console.log(nEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), '[4, 6, 8]')
//multiple even nums, but you only want the LAST two even nums, right bob?
//if we get -8 and 26 in the console is the problem considered solved?
console.log(nEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), '[-8, 26]')