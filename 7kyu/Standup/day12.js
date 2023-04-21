// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).



function findDeletedNumber(arr, mixArr) {
    //filter through array and filter every num in mixed array, return missing num 
    // return arr.filter( n => mixArr.indexOf(n) === -1 )[0] || 0 //brute force soln

    //checking lengths comes up a lot
    if(arr.length === mixArr.length){
        return 0
    }else{
        let arrSum = arr.reduce((a,c)=> a+c, 0)
        let mixSum = mixArr.reduce((a,c)=> a+c, 0)
        return arrSum - mixSum
    }
  }

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

//using filter and indexOf is using a loop inside a loop making it linear so slow

//anki problem memorize this
function missNum(arr, mixArr) {
    //constant check
    if (arr.length === mixArr.length){
        return 0
    }else{
        let arrSum = arr.reduce((a,b)=> a + b, 0)
        let mixArrSum = mixArr.reduce((a,b)=> a + b, 0)
        return arrSum - mixArrSum
        //linear loops, non nested so theyre not as slow
    }
}

function missNum(arr, mixArr) {
    if(arr.length === mixArr.length){
        return 0
    }else{
        let sum = arr.reduce((a,b)=> a + b, 0)
        let mixSum = mixArr.reduce((a,b)=> a + b, 0)
        return sum - mixSum
    }
}
//test
//more test