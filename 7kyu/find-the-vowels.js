// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)
//P: will there be any special characters?
//R: return position of vowels
//E: joe -> [2,3]
//P: set vowels of lower and upper into array, find indexof vowels + 1 since it starts at 0 and push into array

function vowelIndices(word){
    vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    result = []
    for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) != -1) {
        result.push(i + 1);
      }
    }
    return result;
  }