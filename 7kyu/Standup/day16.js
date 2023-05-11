// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

//will there be any strings?
//return the avg length of the array

function averageLength() { 
    //get avg length -> rounded
    const avgLength = Math.round(arr.join('').length / arr.length)
    //create new arr using each letter the avg length amount
    return arr.map( str => str[0].repeat(avgLength))
  }

function averageLength(){
    const averageLength = Math.round(arr.join('').length / arr.length)
    //created new array so using each letter and div by length of arr
    return arr.map( str => str[0].repeat(avgLength))
}

// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

//will there be any strings?
//will there always be two values, will it always be an array
//will there ever not be repeating numbers, only letters, and any empty strings?
//return the avg length of the array

function avgLength(arr){
  //get avg length and round it
  const avgL = Math.round(arr.join('').length / arr.length)
  //create new array using each letter the avgLength amount
  return arr.map(  str => str[0].repeat(avgL))
  //take letter in 0 beginning, repeating letters
  //new array is created, grab avg length of a, b, c, keeps looping until we get length
  //SOLN grabs first letter of string and will keep repeating until ti satifies the avg length

}

