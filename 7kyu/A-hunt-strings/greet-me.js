// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
//P:recieving lower case and upper case words, will there be special characters such as decimals or exclamation marks? will there be nums?
//R: return hello + name but with only first letter of words capitolized and exclamation mark at the end
//E: // "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
//P: return the word in lowercase then add hello and exclamation mark in template literal
//capitolize first letter of name -> name[0].toUpperCase

var greet = function(name) {
    let el = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1); //slice (1) returns the rest of the name like 'Riley' -> iley
    //charAt(0) only capitolizes first letter the + combines the remaining of the name
    return `Hello ${el}!`
};

//another soln
var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };