// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
//P:any neg nums?
//R: return string with highest order of nums
//E: // Input: 42145 Output: 54421
//P: use sort b-a
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

//another soln
function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}


  