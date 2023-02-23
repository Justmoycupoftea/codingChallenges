// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//will it always be nums, whole nums, positive nums, will be negative?
//do i always round down even if its 2.7?
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


function getAverage(marks){
    //loop through the array and get the sum
    let sum = marks.reduce((a,c)=> a + c)
    //avg -> sum / marks.length
    //return the value
    //we can do a map, reduce, or simple for loop
    //use Math.floor for rounding down
    return Math.floor(sum / marks.length)
  }
  //does the company use es6?
  const getAverage = arr => Math.floor( arr.reduce((a,b) => a+c) /arr.length)

//console log to pass in test cases
console.log((getAverage([2,2,2,2]),2))
console.log((getAverage([1,2,3,4,5,]),3))
console.log((getAverage([1,1,1,1,1,1,1,2]),1))

//practice

function getAvg(marks){
  let sum = marks.reduce((a,c) => a + c)

  return Math.floor(sum / marks.length)
}

function getAvg(marks){
  let sum = marks.reduce((a,c) => a + c)

  return Math.floor(sum / marks.length)
}

function getAvg(marks){
  let sum = marks.reduce((a,c) => a + c)

  return Math.floor(sum / marks.length)
}