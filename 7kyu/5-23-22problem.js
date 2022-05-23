// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

//P: principal = desired return 0, no neg nums
//R: return the number of years for investment 
//E: new total = principal * interest 
//new total * tax return  new total - desired
//P: determine how many years to return desired monies

//P: need to write a loop that adds the new interest after tax is taken out until its exceeds or meets the desired amount and returns the year
//my failed code
function calculateYears(principal, interest, tax, desired) {
    // your code
  let newTotal = principal * interest
  let taxed = (newTotal - principal) * tax
  let final = newTotal - taxed
  return desired < final 
  for(i = final; i <= desired; i += taxed; ){
      if(a[i] > desired)
  }
}

//correct code
function calculateYears(principal, interest, tax, desired) {
    // your code
  for (let years = 0; desired - principal > 0; years++) { //looped through the problem adding the new total and returning the year
    //desired amount - new total (principal) keeps looping until negative
    principal = principal + (principal * interest) - (principal * interest * tax);    
}    
    return years;
}
//clean soln
function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

//another prob wasn't satisfied with first
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
// accepts 3 integers for values a, b, c they all have to be greater than 0? 
//P: what is taken in, will it always be a number? no string or boolean? always whole? 
//R: return number true if numbers are > 0 
//E:
function isTriangle(a,b,c){
    if(a + b > c) && (b + c > a) && (c + a > b){
        return true
    }else{
        false
    }
}
//triangle formula
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}