// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//cant sort bc index is changed

function gimme (triplet) {
    //sort -> index
    //arr -> indexOf num ^
    return triplet.indexOf([...triplet].sort((a,b) => a - b)[1])
    //making a copy of array and sorting
}

console.log(gimme([2, 3, 1]), "0")
console.log(gimme([5, 10, 14]), "1")

//array coming in, only 3 distinct nums, will it always be positive or whole nums

function gimmeThree(three){
    return three.indexOf([...three].sort((a,b)=> a - b)[1])
    //index of the middle of three nums would be 1  
    //sort array and find index of num
}

