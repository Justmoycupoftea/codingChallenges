// Given an array/list of integers, find the Nth(index-one, gives u some num and replaces it) smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
//will it be empty, no bc always 3, will it ever be a string of any special characters
//paramters above

// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 //n would be THIRD SMALLEST element which wud be 7
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 //looking for 4th element
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

//lexical graphical sorts alphabet helps with sorting which is under the hood of sorting
//a comes before b so nums are rearrange from highest to lowest

function nthSmallest(arr, n){
    //sort arr
    //find nth num -> n - 1
    return arr.sort((a,b)=> a-b)[n-1]

}

function nsmall(arr, n) {
    return arr.sort((a,b)=> a-b)[n-1]
}

function nsmall(arr, n) {
    return arr.sort((a,b)=> a-b)[n-1]
}

function findSmallN(arr, n) {
    //taking in an array, so i need to sort it
    //find nth num, look for index, take num and -1 so we can find numb in that index
    return arr.sort((a,b)=> a - b)[n-1]
    //use bracket notation to locate num in index, since num element would be one lower than the index
}

function nsmally(arr, n) {
    return arr.sort((a,b)=> a - b)[n-1]
    //[n-1] subtracts 1 from index to find element
}


console.log(nthSmallest([3,1,2],2), '2')
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92],5), '92')

//another soln
function nthSmallest(arr, pos){
    let sorted = arr.sort((a,b) => a-b);
    
    return sorted[pos-1];
  }