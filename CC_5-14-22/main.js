// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    // Your code here
    let shoe = str.split("");
    let string2 = shoe.map(c=> c+c); //using map doubled the string letter
    let joinStr = string2.join("");
    
    return joinStr
    }
//clean soln
const doubleChar = (str) => str.split("").map(c => c + c).join("");
