//attempted codewar ladder 8kyu - 7kyu - 6kyu - 7kyu -8kyu

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, 
// n is the number of customers to buy hotdogs, different numbers have different 
// prices (refer to the following table), return a number that the customer need to pay how much money.

function saleHotdogs(n){
    if (n < 5) return n * 100;
    if (n >= 5 && n < 10) return n * 95; else return n * 90;
  }

//7kyu 
// Your task is to convert strings to how they would be written by Jaden Smith. 
// Capitalize every word.

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }