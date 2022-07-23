// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
    const S = s.toUpperCase()
    let a = ""
    let b = ""
    for (let i = 0; i < s.length; ++i) {
      if (i & 1) {
        a += s[i]
        b += S[i]
      } else {
        a += S[i]
        b += s[i]
      }
    }
    return [a, b]
  }
  //another soln
  function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };
//   I don't think this is the best practice. You are looping twice when it can be done with one loop

//   const s = ['','']; for(let i = 0; i < letters.length ; i++) { s[0] += i % 2 === 0 ? letters[i].toUpperCase() : letters[i].toLowerCase(); s[1] += i % 2 === 0 ? letters[i].toLowerCase() : letters[i].toUpperCase(); }