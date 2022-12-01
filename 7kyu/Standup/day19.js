// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

//figure out which vowel is missing from each string
//will there always be a missing vowel, multiple, single? missing special chars?

function absentVowel(x){
    //list all vowels -> loop through each letter and see if that letter is there or not
    let vowels = 'aeiou'
    for(let i = 0; i < vowels.length; i++){
        if( x.indexOf(vowels[i]) === -1){
            return i
        }
    }
}
//indexOf is a linear loop, were in a loop inside a loop, quadratic 
//each letter we're doing 5 checks

console.log(absentVowel('John Doe hs seven red pples under his bsket'), '0')
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'), '3')