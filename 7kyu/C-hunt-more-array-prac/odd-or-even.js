// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//P: what are the inputs for this function? an array of integers, or an empty array
//R: return even or odd, whether the sum of the array elements if even or odd, displated as the word 'even' or 'odd'
//E:   it('Edge tests', () => {
//     assert.strictEqual(oddOrEven([0]), 'even')
//     assert.strictEqual(oddOrEven([1]), 'odd')
//     assert.strictEqual(oddOrEven([]), 'even')
//   });
  
//   it('Even tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
//     assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
//     assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
//   });
  
//   it('Negative Even tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
//     assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
//     assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
//   });

//P: use reduce method to sum the array elements and then check whether it is odd or even using a modulus, then return the appropriate string value.

function oddOrEven(array) {
    return array.reduce((sum, current) => sum + current, 0) % 2 ? 'odd' : 'even'
}

function oddOrEven(array){
    return array.reduce((sum, current) => sum + current, 0) % 2 ? 'odd' : 'even'
}
//using reduce sum array of nums and mod 2 to determine if it's even or odd