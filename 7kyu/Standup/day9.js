// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//UTF characters, any empty spaces allowed or more than one of the same character allowed, will there be cases where it's just 15 characters?
//return a string made up of left and right parenthesis 

function duplicateEncode(word){
    //toLowerCase
    //turn string into array have to split then use map split -> map -> indexOf === lastIndexOf ? '(' : ')'
    //join
    return word.toLowerCase()
                .split()
                .map((l, i, a) => a.indexOf(l) === a.lastIndexOf(l) ) ? '(' : ')'
                //current letter equal to last letter
                //indexOf and lastIndexOf compares values to each other to see if it is repeated or not
                .join('')
}

function dupes(word){
  return word.toLowerCase().split().map((l, i, a) => a.indexOf(l) === a.lastIndexOf(l)) ? '(' : ')'
                  //current letter equal to last letter
                //indexOf and lastIndexOf compares values to each other to see if it is repeated or not
}

function dupes(word){
  return word.toLowerCase().split().map((l, i, a) => a.indexOf(l) === a.lastIndexOf(l)) ? '(' : ')'
                //current letter equal to last letter
                //indexOf and lastIndexOf compares values to each other to see if it is repeated or not
                //console log closed parenthesis if the letters are the same else closed if different
}

function dupes(word){
  return word.toLowerCase().split().map((l, i, a)=> a.indexOf(l) === a.lastIndexOf(l)) ? '(' : ')'.join('')
  //current letter is equal to last letter return open ')' if not return '('
  //index of l compares first letter to lastindexof to last letter 'din' => ((( nothing is match
  //recede => ()()()
}

//USE HASH MAP FOR THIS RE DO THIS

console.log(duplicateEncode('din'), '(((')
console.log(duplicateEncode('recede'), '()()()')

//clearer soln

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
    }

function dupes(word){
  return word.toLowerCase().split('').map( function(a,i,w) {return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'}).join('')
}
    
function dupes(word){
  return word.toLowerCase().split('').map( function(a,i,w) {return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'}).join('')
}