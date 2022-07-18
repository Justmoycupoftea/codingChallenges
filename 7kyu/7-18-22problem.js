// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
//P: will there be any neg nums
//R: return true if values in array are below or equal to limit
//E: [66,101], 200 true
//P: loop through length of array to see if each num is less than equal to limit or else return false if greater than limit 


function smallEnough(a, limit){
    let max = Math.max(...a) //spread out array and get the max value
    if(max <= limit){
        return true
    }else{
        return false
    }
}
//what i was trying to do
function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++){ //the i is the position of the number in the array, the index of
      if (a[i] > limit) { //cant use less than equal to bc the array stops and returns true without finishing
        return false
      }
    }
    return true
  
  }
