//attempted codewar ladder 8kyu - 7kyu - 6kyu - 7kyu -8kyu

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
    return s.repeat(n);
}

//7kyu 
// Your task is to convert strings to how they would be written by Jaden Smith. 
// Capitalize every word.

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

//6kyu
