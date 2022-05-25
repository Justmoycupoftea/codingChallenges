// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//take in string as parameter and return it reversed
//P: any special characters? any numbers?
//R: return the words reversed
//E: shoe ==> eohs
//P: return str.reverse?
//need to reverse each word and not the whole string
function reverseWords(str) {
    // Go for it
    return str.split('').reverse().join('').split('').reverse().split(''); //string is mirrored have to repeat function to get the word reversed in place
}
//more code wars
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
//P: no negatives or empty arrays
//R: return number of people who are still in the bus after last array
//E: [1,2] 1 person gets on 2 get off 
//P: figure out how many people are left at the end
//use sort and sum all of them
//incorrect soln
var number = function(busStops){
    // Good Luck!
    let final = busStops.reduce((a,b)=>a+b)
    return final - sum(busStops.length[0])
    
}
//correct soln
var number = function(busStops){
    var totalPeople = 0;
    for (var i=0; i<busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;
}
//simplified
const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
//other variations
var number = function(busStops){
    // Good Luck!
    var num=0;
    for(var i=0;i<busStops.length;i++){
        num+=busStops[i][0]-busStops[i][1]
    }
    return num;
  }