// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//P: parameters what's coming in? will there be any negative numbers? will there be an empty array?
//R: return yes for ascending, yes for descending, and no for otherwise
//E: [1,2] -> 'yes ascending'
//P: use if and else statments comparing the arrays, if ascending == array.sort return yes ascend, same with descending, and else return no

const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
           s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
  }
  //another soln
  function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }
  //arr.every() takes a function as its argument and returns true if and only if that argument function returns true on every array element.
//   arr.every() then calls this function on each array element x, pairing the element with its index i. The condition on the right obviously is the check to see if it's increasing, but the condition on the left is just an edge case to avoid an error when using arr[i-1]. Look up arrow functions if you don't know about them already. It's just a shorter, cleaner way to write out simple functions like this.

// Note that this solution passes through the array twice because arr.every() is called twice, but the same result can be found with one pass using simple loops.

// We are saying that if the index happens to be 0, or if the arr[i] (which is x at the moment) is more than or equal to the arr[i — 1] (the one before it). So if X is more than or equal to the one before it, then we would call it ASCENDING

// The opposite is true in the second line where we say that if i (the index of the value being evaluated) is 0 or if arr[i] which stands in for x is less than or equal to the one before it in the array (arr[i-1]), then we would call it DESCENDING.