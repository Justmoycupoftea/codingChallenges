//finished 8kyu

//7kyu
// Write a function that takes an array of strings as an argument and returns a sorted array 
// containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be 
// different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

//6kyu

// This kata is designed to test your ability to extend the functionality of built-in classes. 

// In this case, we want you to extend the built-in Array class with the 

// following methods: square(), cube(), average(), sum(), even() and odd().

Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

Array.prototype.square = function() {
    var squared = [];
    for (var i = 0; i < this.length; i++) {
      squared[i] = Math.pow(this[i], 2);
    }
    return squared;
  }
  
  Array.prototype.cube = function() {
    var cubed = [];
    for (var i = 0; i < this.length; i++) {
      cubed[i] = Math.pow(this[i], 3);
    }
    return cubed;
  }
  
  Array.prototype.sum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  }
  
  Array.prototype.average = function() {
    if (this.length == 0) return NaN;
    return this.sum() / this.length;
  }
  
  Array.prototype.even = function() {
    var evens = [];
    for (var i = 0; i < this.length; i++) {
      if (this[i] % 2 == 0) evens.push(this[i]);
    }
    return evens;
  }
  
  Array.prototype.odd = function() {
    var odds = [];
    for (var i = 0; i < this.length; i++) {
      if (this[i] % 2 == 1) odds.push(this[i]);
    }
    return odds;
  }

//7kyu

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). 

// Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
  return numbersArray.filter(numbersArray => numbersArray % 2 == 0)
}

//8kyu
// Convert number to reversed array of digits
// Given a random non-negative number, you have to 
// return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
  
    const numsArr = Array.from(String(n), Number);
    
    return numsArr.reverse()
}
//cleaner version 
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

