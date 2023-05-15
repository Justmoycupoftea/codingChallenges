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
        if(i % 2 === 0 && i % 3 === 0){
            return 'fizzbuzz'
        }else if(i % 2 === 0){
            return 'fizz'
        }else if(i % 3 === 0){
            return 'buzz'
        }else{
            return i
        }
    }
}

function fizzbuzz(nums){
    for (let i = 1; i <= nums; i++){
        if(i % 2 === 0 && i % 3 === 0){
            return 'fizzbuzz'
        }else if(i % 2 === 0){
            return 'fizz'
        }else if(i % 3 === 0){
            return 'buzz'
        }else{
            return i
        }
    }
}

//leons soln more optimized
//recieve whole num, always whole num, no funny bizz

function fizzBuzz(num){
    // %2 -> fizz; %3 -> buzz; 2%&&%3 -> fizzBuzz; num
    for(let i = 1; i <= num; i++){
        //ask if i can just divide by 6 since 2 & 3 are multiples
        if(i % 6 === 0){
            console.log('fizzBuzz')
        }else if(i % 2 === 0){
            console.log('fizz')
        }else if(i % 3 === 0){
            console.log('buzz')
        }else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(6), '1,fizz,buzz,fizz,5,fizzBuzz')
console.log(fizzBuzz(8), '1,fizz,buzz,fizz,5,fizzBuzz,7,fizz')

function fizzbuzz(nums){
    for (let i = 1; i <= nums; i++){
        if(i % 2 === 0 && i % 3 === 0){
            return 'fizzbuzz'
        }else if(i % 2 === 0){
            return 'fizz'
        }else if(i % 3 === 0){
            return 'buzz'
        }else{
            return i
        }
    }
}

function fizzbuzz(nums){
    for (let i = 1; i <= nums; i++){
        if(i % 2 === 0 && i % 3 === 0){
            return 'fizzbuzz'
        }else if(i % 2 === 0){
            return 'fizz'
        }else if(i % 3 === 0){
            return 'buzz'
        }else{
            return i
        }
    }
}

function fizzbuzz(nums){
    for (let i = 1; i<= nums; i++){
        if (i % 2 === 0 && i % 3 == 0){
            return 'fizzbuzz'
        }else if (i % 2 === 0){
            return 'fizz'
        }else if (i % 3 === 0){
            return 'buzz'
        }else{
            return i
        }
    }
}

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//fizzbuzz problem

//will i always be given a number, will it always be a whole number, will it always be positive
//will there be neg nums
//return multiple of 2&3 we use fizzbuzz, multiples of 2 fizz, and multiplies of 3 buzz
//1,fizz,3,fizz,5
//1,2,buzz,4,5
//1,fizz,buzz,fizz,5,fizzbuzz
//for loop to loop through 1 - num so we start at 1 and not 0, use condtionals to return 

function fizzbuzz(num){
    //%2 -> fizz, %3 -> buzz; %2 && %3 -> fizzbuzz; num
    //use a loop to count through the nums
    for(let i = 1; i <= num; i++){
        if(i % 2 === 0 && i % 3 === 0){
            console.log('fizzbuzz')
        }else if (i % 2 === 0){
            console.log('fizz')
        }else if (i % 3 === 0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}

//test cases
//use more test cases
console.log(fizzbuzz(6), '1, fizz, buzz, fizz, 5, fizzbuzz')