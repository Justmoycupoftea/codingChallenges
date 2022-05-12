// You're writing code to control your town's traffic lights. You need a function 
// to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current 
// state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
  
    //your code here!
  if(current == 'green'){  //use == not = which is assignment
    return 'yellow'
  }else if(current == 'yellow'){
    return 'red'
  }else if(current == 'red'){
    return 'green'
  }
}
//clean soln
const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]
//The function returns an object & we access the object with square brackets (myObject[objectKey]). 
// So if you call updateLight('green'), we call the returned object['green'] & it returns yellow.


