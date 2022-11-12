// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

//will there be neg nums, whole nums, decimals, strings, string of nums? array of string of nums make sure what it is
//any funny biz like special characters will we be getting only nums?

//return array of string and nums
//do i need to replicate "two" into 2
//im going to return to u a sum which is a number

function sumMix(){
    //arr reduce to a sum
    //adding a + c which is the accumulation
    //reduce will loop through array of nums and number will make c turning it into a number
    return arr.reduce((a,c)=>a + Number(c), 0)
}
console.log(sumMix([9, 3, '7', '3']), 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)

function mixNums(){
    return arr.reduce((a,c) => a + Number(c), 0)
    //use reduce to add initial plus new parameter
}

function mixNums(){
    return arr.reduce((a,c) => a + Number(c), 0)
}

function mixer(){
    return arr.reduce((a,c) => a + Number(c), 0)
}

function mixer(){
    return arr.reduce((a,c)=> a + Number(c), 0)
}

function mixer(){
    return arr.reduce((a,c)=> a + Number(c), 0)
}
function mixer(){
    return arr.reduce((a,c)=> a + Number(c), 0)
}