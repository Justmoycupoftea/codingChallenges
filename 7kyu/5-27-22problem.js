// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

//count the number of times a number that can be divded into the number
//P: no negatives?
//R: return the numbers it can be divded by and how how many
//E: 4 can be divived 3 times with 1,2,4
//P: use % to figure out how many times it can be divded? use a for loop to find out how many times and print when it hits 0
function getDivisorsCnt(n){
    // todo
    let output = 0; 
    for (let i=1; i<=n; i++) {
      if (n % i == 0) {
        output += 1; 
}
}
  return output;
}
//better soln
function getDivisorsCnt(n) {
    for (let d = 0, i = n; i > 0; i--) {
      if (n % i == 0) d++;
    }
    
    return d;
}
//another soln
function getDivisorsCnt(n) {
    var cnt = 1;
    for (var i = 0; i <= n / 2; ++i)
      if (n % i == 0)
        ++cnt;
    return cnt;
}//the divisor must be at least half the dividend. For example 51 cannot be a divisor for 100 because it needs to be multiplied by at least 2 and this is already more than 100. But the dividend itself is a divisor, so the counter (cnt) starts from 1.
