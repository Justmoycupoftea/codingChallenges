// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//are we getting all nums, no spaces, no funny bizz, no strings
//return even numbers in same order, sort odd nums
//filter all the uneven nums, sort the uneven nums
//return the new mapped array if num is even just return in same spot, and add all uneven nums into new array

function sortArray(array) {
    //filter -> sort
    const oddNums = array.filter(n => n % 2 !==0).sort((a,b) => a - b)
    //console.log(oddNums)
    //map
    return array.map(n => n % 2 === 0 ? n : oddNums.shift())

    //can use .pop but need to sort b-a

    //adding patterns in anki to remember  

  }
console.log(sortArray([7, 1], '[1, 7]'))
console.log(sortArray([5, 8, 6, 3, 4], '[3, 8, 6, 5, 4]'))

function arraySort(nums){
    let sortedOdd = nums.filter(n => n % 2 !== 0).sort((a,b)=> a-b)

    return sorted.map(n => n % 2 === 0 ? n : sortedOdd.shift())
}



//loop method

function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
      if (array[i]%2 !== 0) {
        odds.push(array[i]);
      }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
      return a-b;
    });
    
    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
      if (array[j]%2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
  }

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//are we getting all nums, no spaces, no funny bizz, no strings
//return even numbers in same order, sort odd nums
//filter all the uneven nums, sort the uneven nums
//return the new mapped array if num is even just return in same spot, and add all uneven nums into new array

function arraySort(nums){
  let sortedOdd = nums.filter(n => n % 2 !== 0).sort((a,b)=> a-b)

  return sorted.map(n => n % 2 === 0 ? n : sortedOdd.shift())
}

function arraySort(nums){
  let sortedOdd = nums.filter(n => n % 2 !== 0).sort((a,b)=> a-b)
  //filter out all odd nums

  return sorted.map(n => n % 2 === 0 ? n : sortedOdd.shift())
  //sort odd nums, return even nums to array and push all sorted odds into array
}

function arrayS(nums) {
  let sortedO = nums.filter(n=> n % 2 !==0).sort((a,b)=> a-b)

  return sortedO.map(n => n % 2 !== 0).sort((a,b)=> a-b)
}

function arrayS(nums) {
  let sortedO = nums.filter(n=> n % 2 !==0).sort((a,b)=> a-b)

  return sortedO.map(n => n % 2 !== 0).sort((a,b)=> a-b)
}

function arrayS(nums) {
  let sortedO = nums.filter(n=> n % 2 !==0).sort((a,b)=> a-b)

  return sortedO.map(n => n % 2 !== 0).sort((a,b)=> a-b)
}

function arrayS(nums) {
  let sortedO = nums.filter(n=> n % 2 !==0).sort((a,b)=> a-b)

  return sortedO.map(n => n % 2 !== 0).sort((a,b)=> a-b)
}

function arrayS(nums) {
  let sortedO = nums.filter(n=> n % 2 !==0).sort((a,b)=> a-b)

  return sortedO.map(n => n % 2 !== 0).sort((a,b)=> a-b)
}

function arrayS(nums) {
  let sortedO = nums.filter(n=> n % 2 !==0).sort((a,b)=> a-b)

  return sortedO.map(n => n % 2 !== 0).sort((a,b)=> a-b)
}

function arrayS(nums) {
  let sortedO = nums.filter(n=> n % 2 !==0).sort((a,b)=> a-b)

  return sortedO.map(n => n % 2 !== 0).sort((a,b)=> a-b)
}

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//are we getting all nums, no spaces, no funny bizz, no strings
//return even numbers in same order, sort odd nums
//filter all the uneven nums, sort the uneven nums
//return the new mapped array if num is even just return in same spot, and add all uneven nums into new array

function arrayTotal(num){

}