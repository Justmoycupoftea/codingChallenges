// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
}
//second loop j = i + 1
// Because in the second for loop we dont want to compare the same letter to itself. Also, there is no need to compare the second letter to the first, third letter to the first and second, and so on, if youve already compared them before ever reaching to that particular letter.

// i.e [a, b, c, d , e ,a] starting from a, you compare it to everything but itself. when youre at b, you dont need to compare it to a since you did that already. This continues for each letter. 