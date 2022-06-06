// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
//The way the solution is working, first it checks if the number we are given(sq) is Integer p.x 121 -> sqrt(121) = 11 which is an integer. Second to find the next square to our given number, it ass 1 and then squares it so: 11 + 1 = 12 and 12**2 = 144. So the next square off 121(11^2) is 144(12^2). If you wanted the next square of 144 you will go teh same way, so it will be 13^2=169.

//another soln
function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }
    return -1;
}