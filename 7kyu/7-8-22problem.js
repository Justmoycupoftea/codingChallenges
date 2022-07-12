// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
//review this problem
let gimme = function (triplet) {
    // Clone the input array.
    let clonedArray = triplet.slice(0); //slice returns a shallow copy of an array into a new array object
    // Sort it in ascending order.
    clonedArray.sort(function(a, b){ //triplet is sorted
      return a-b
    });
    return triplet.indexOf(clonedArray[1]); //index 1 is the number that sits beteween the three nums
};

//another soln
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

