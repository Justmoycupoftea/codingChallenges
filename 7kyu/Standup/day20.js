// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//fizzbuzz problem

//will there be neg nums, special characters, spaces, strings
//return multiple of 2&3 we use fizzbuzz, multiples of 2 fizz, and multiplies of 3 buzz
//1,fizz,3,fizz,5
//1,2,buzz,4,5
//1,fizz,buzz,fizz,5,fizzbuzz
//for loop to loop through 1 - num so we start at 1 and not 0, use condtionals to return 

function fizzbuzz(nums){
    for (let i = 1; i <= nums; i++){
        if(i % 2 == 0 && i % 3 == 0){
            return 'fizzbuzz'
        }else if(i % 2 == 0){
            return 'fizz'
        }else if(i % 3 == 0){
            return 'buzz'
        }else{
            return i
        }
    }
}