// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//P:Only one type of perfect square, squares cant be negative or else its not perfect
//E: 0 is a perfect square? sqrt 4 = 2 so perfect sq
//R: returning a perfect square that is sqrt able, 0 is just true
//P: sqrt parameter % 2 == 0 || % 3 == 0 return true 
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
}

//retyping code to understand
let isSq = function(n){
  return Math.sqrt(n) % 1 === 0; //mod 1 goes into the number until 0 then we know its a perfect sq
}