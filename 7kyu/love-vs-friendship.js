// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.
//P:Will there be spaces or special characters?
//R: return the letter for its number value and summing it
//E: a,b,c -> 1+2+3 = 6
//P: assign the string a number value in the alphabet, loop through the string and give it a number value

function wordsToMarks(string){
    //your code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = 0;
    
    for (let i = 0; i < string.length; i += 1) { //loop through string adding a number to each letter
      result += (alphabet.indexOf(string[i]) + 1); //finding index of letter and adding +1 continaully until reaching z which would be 26
    }
    
    return result;
  }