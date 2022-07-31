// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.
//P: will there be any special characters or punctuation 
//R: return the nmber of javascript developers
//E: see above
//P: filter through and find 'Javascript' and return the number of js devs from Europe only
function countDevelopers(list) {
    return list.filter((obj) => obj.continent === 'Europe' && obj.language === 'JavaScript').length;
  }
//another soln
function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&& x.language=='JavaScript').length
  }
//another soln
function countDevelopers(list) {
    return list
      .filter(dev => dev.language === "JavaScript")
      .filter(dev => dev.continent === "Europe")
      .length
  }