// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
//code war problem 
//PREP

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
}

// let map = function(array,func) { //declare array variable where we will store each functions operation on each element let arrayToReturn = [] //iterate the array on which we will call the function for(let i = 0; i < array.length; i++ ) { //in the function we pass in we have the ability to do what ever we want to that element
//     // val index, array
//     arrayToReturn.push(func(array[i], i, array)) //once the operation is complete you return that value which then gets pushed in to the above array } //now when the iteration is done on the whole array the last thing we need to do is return the completed array //this is pretty much how map works hope it helps you understand it a bit more!
    
//     } //id call this like so map(['1','2','3','4'], function(val, index) { return val + index }) or
    
//     map(['1','2','3','4'], (val, index) => val + index) //ull get something like this =) => [1, 3, 5, 7]

//another soln
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)