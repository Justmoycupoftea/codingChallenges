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

//leon's soln
