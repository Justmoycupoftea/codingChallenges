// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"


function solution(pairs){
    return Object.keys(pairs)
      .map(function(k) { return k + ' = ' + pairs[k] })
      .join(',');
  }
//other soln
function solution(pairs) {
    return Object.keys(pairs).map(k => `${k} = ${pairs[k]}`).join(",");
  }

//practicing 
function solution(pairs){
    return Object.keys(pairs)
    .map(function(k) { return k + ' = ' + pairs[k] })
    .join(',');
}
function solution(pairs){
    return Object.keys(pairs) //returning Objects and properties inside
    .map(function(k){return k + '=' + pairs[k]}) //mapping would copy the array and pass in the new element we pass in which is 'k'
    //'k' would be the object and pairs[k] would be the value inside the object
    .join(',') //variables are joined forming ({a: 1, b: '2'}) // should return "a = 1,b = 2"
}

function solution(pairs) {
  return Object.keys(pairs)
  .map(function(k){return k + '=' + pairs[k]})
  .join(',')
}

function solution(pairs){
  return Object.keys(pairs)
  .map(function(k){return k + '=' + pairs[k]})
  .join(',')
}
