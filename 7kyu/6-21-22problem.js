// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
      result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
}
//In this case it is being used to create an empty array and join the array together using whichever character is being iterated over in the loop. Since there are no contents in the array, using this with the join() function works like a multiplier for the character being passed into join. For example Array(3).join("x") would evaluate to xx. You need one more item in the array since join() adds characters between array objects, so three empty arrays would be seperated by 2 join characters.

//map soln
function accum(s) {
    return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
  }