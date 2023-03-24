// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

//will there be an empty array, any funny bizz such as strings or booleans?
//dont have to worry bout empty arrays? arrays will have atleast 1 num?
//num -> uni comb

function solve(arr) {
    //set -> uni values
    //map [1,2],[4],[5,6] -> want map to return 2,1,2 2 unique nums in first set, 1 unique num in second, and two in third, duplicates are unique nums
    //reduce -> @*1*2
    // return arr.map(sa => new Set(sa).size).reduce((a,c)=>a*c, 1)
};

function solve(arr) {
    return arr.map(sa => new Set(sa).size).reduce((a,c)=> a + c, 1)
    //mapping new array
    //adding up new array and returning the array as a set
}

//does your company use ES6 would you like me to leave as is or make it a one liner?

// const solve = arr => arr.reduce((a,c) => a * new Set(c).size, 1)

console.log(solve([[1,2],[4],[5,6]]), '4')
console.log(solve([[1,2],[4,4],[5,6,6]]), '4')

function solve(arr){
    return arr.map(n => new Set(n).reduce((a,c)=> a + c, 1))
}

function solveThis(arr) {
    return arr.map(n => new Set(n).reduce((a,c)=> a+ c, 1))
}