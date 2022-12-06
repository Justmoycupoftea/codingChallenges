// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function solution(pairs){
    return Object.keys(pairs)
      .map(function(k) { return k + ' = ' + pairs[k] })
      .join(',');
  }

  function solution(pairs){
    return Object.keys(pairs)
    .map(function(k) { return k + '=' + pairs[k] })
    .join(',');
  }

//other soln
function solution(pairs) {
    return Object.keys(pairs).map(k => `${k} = ${pairs[k]}`).join(",");
}

//my soln solved a diff problem
//leon's soln
function countChars(str){
    //create obj
    let countObj = {}
    //loop -> check val exist ? val++ : val-1
    for(const c of str){
        //loop moves through each char in string
        if( countObj[c] ){
            countObj[c]++
        }else{
            countObj[c] = 1
        }
    }
    return countObj

}

console.log(countChars('aba'), "{'a': 2, 'b': 1}")
console.log(countChars('dog'), "{'d': 1, 'o': 1, 'g':1}")
console.log(countChars('abba'), "{'a': 2, 'b': 2}")