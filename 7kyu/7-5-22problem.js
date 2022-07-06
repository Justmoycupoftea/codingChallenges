// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
//PREP
//P: will there be negative nums or decimals?
//R: return all nums except num with a 5 and sum total of nums 
//E: 1,5 -> 1,2,3,4 -> 4
//P: loop through index if % 5 then ignore else += total

    function dontGiveMeFive(start, end){
        let res = [];
        for (let i = start; i <= end; i++) { //loop through string
          if (!i.toString().includes('5')) res.push(i); //if not equal to string and does not includes '5' then push to array
        }
        return res.length; //return array length of nums that don't equal 5
      }
//another soln

function dontGiveMeFive(start, end) {
    let count = 0;

    for (let i = start; i <= end; ++i)
        if (!i.toString().includes("5"))
            count++;

    return count;
}
