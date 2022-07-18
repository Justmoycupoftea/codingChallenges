// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// maxMultiple (10,50)  ==> return (50)
// Explanation:
// (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

// maxMultiple (37,200) ==> return (185)
// Explanation:
// (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .
//37 goes into 200 5 times = 37*5 = 185

//No real steps to this one. You just have to realize that bound % divisor = remainder and subtracting the remainder from bound will give you the highest integer multiple.

//Example (2,7) -> 7%2 = 1; 7/2 = 3.5 in other words 7 contains whole number 2 three times which is 6 in total. Does it make sense?
//by definition the remainder of a division is the amount you would need to substract from the bound in order to get a whole multiple

//another exp
//17%7=3 17-3 = 14, ans is 14
//7 goes into 17 2 times which is 14 and 14 is the highest integer

function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }