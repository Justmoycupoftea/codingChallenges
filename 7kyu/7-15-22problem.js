// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//P: will there be any neg nums, spaces, decimals?
//R: return sorted nums or empty
//E: [1,3,2] --> [1,2,3]
//P: use sort function and tenary log?
function solution(nums){
    if(nums === null ){ //null don't need to be in quotes
        return [];
       }else{
      
    return nums.sort((a,b)=> a-b)}
}

//how i was trying to use ternay
function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
    //arrow function     return nums !== null ? nums.sort((a,b)=> a-b) : [];

}