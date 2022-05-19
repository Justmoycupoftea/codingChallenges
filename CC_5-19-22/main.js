// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a 
//murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//PREP
//P: given non-neg integer, num
//R: returning string with num placed inside
//E: use template literal ${num}
//P: write function with a template literal that takes in the parameter num

var countSheep = function (num){
    //your code here
    return `${num} sheep...`
}

//incorrect analysis needed to use a loop

var countSheep = function (num){
    //your code here
          let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  
  
  }
