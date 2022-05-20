// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//P: will I get negative nums?
//R: returning squared nums, need to split nums to square them, join strings
//E: num.split('').math.pow(Number(num), 2).num.join()
//P: need to split numbers, square them, and then rejoin them
function squareDigits(num){
    let spread = num.toString().split('')
    let sum = spread.map(x=> x**2)
    let final = sum.join() // don't need this bc parseInt turns string into num .replace(/\,/g,'')
    return parseInt(final)
}
