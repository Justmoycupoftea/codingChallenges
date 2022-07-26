// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

//P:

const removeDuplicateWords = s => {
    let arr = s.split(" ");
    let sFiltered = [];
    
    for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str) //if equal or a duplicate it won't get pushed to array
    
    return sFiltered.join(" ")
  }

  //another soln
  const removeDuplicateWordss = s => [...new Set(s.split(' '))].join(' ')
