// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

//will there be any strings?

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
