// Write a function that takes a single string (word) as argument. 
// The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//P: Will there be special charatcers to take up space in the word?
//R: return index of capitol letters in the word
//E: Hi -> index of 0 for capitol H
//P: search the string and find capitol letters and deteremine the index 
// var capitals = function (word) {
	// Write your code here
// var sL = word.length;
// var i = 0;
// for (; i < sL; i++) {
//     if (word.charAt(i) === word.charAt(i).toUpperCase()) {
//         return(word.charAt(i).indexOf());
//   }
// }
//   }

//correct soln
var capitals = function (word) {
var caps = [];
for(var i = 0; i < word.length; i++) { //loop through the word
  if(word[i].toUpperCase() == word[i]) caps.push(i); //find position of capitol letter then push into array
}//word[i] shows poisition of letter
return caps;
};

//solns to avoid nums
let letters = function (word) {
    // Write your code here
    var res = [];
    for(var i=0; i<word.length; i++){
      if(isNaN(word[i])===true && word[i]===word[i].toUpperCase()){
        res.push(i);
      }
    }
    return res;
};
