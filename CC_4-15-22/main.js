// Write a function to split a string and convert it into an array of words.

// "Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(string){


return string.trim().split(" ");

  
}
console.log(stringToArray("Robin Singh"));


//other solns

function stringToArray(string){
    return string.split(' ');
  }


//other soln

const stringToArray = string => string.split(' ');
