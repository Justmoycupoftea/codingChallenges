// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]
//P: any negative nums?
//R: return the first highest and second
//E: (1,2,3) --> 2,3
//P: sort the array and return two highest nums 
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2); //slice copies array and returns 2 last nums of array
  }

//what I was trying to do
function twoOldestAges(ages){
    let s = ages.sort((a,b) => b-a);
    return [s[1],s[0]];
    }

//my revised soln
function twoOldestAges(ages){
    let s = ages.sort((a,b) => a-b);
  return [s[s.length-2],s[s.length-1]]; //had to put in bracket parenthesis didnt work
}