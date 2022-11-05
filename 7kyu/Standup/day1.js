// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//give a num as input, print out integers from 1 to num

//will there be any neg nums? any decimals? strings?

//return 'fizzbuzz' if divisible by 3 || 5
//return 'fizz' if divisible by 3
//return 'buzz' if divisible by 5

//3 -> 'fizz'
//5 -> 'buzz'
//15 -> 'fizzbuzz'

//function that uses a loop, for loop nums % by 3 || 5 return 'fizzbuzz'
//else if num % 3 return 'fizz'
//else if num % 5 return 'buzz'
//else return num(i)

///leons comments for PREP

//num with no funy biz, whole num, positive
//log each num or the appr word
//n = 5 -> 1,2, fizz, 4, buzz
//n = 9 -> 1,2, fizz, 4, buzz, fizz, 7, 8, fizz
//n = 15 -> 1,2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
//ask interviewer do we feel comfortable with these examples?
//will i have solved the challenge if my function output these nums

function fizzBuzz(num){
    //for loop from 1 to num, pay attention to problem asked where interviewer ask to start at 1 when loops start at 0, increments start at 1 and not 0
    for(let i = 1; i <= num; i++){

    //condtional
        //if num % 3 && num 5 % === 0 -> fizzbuzz
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        }else if(i % 3 === 0){
            console.log('fizz')
        }else if(i % 5 === 0){
            console.log('buzz')
        }else{
            console.log(i)
        }
        //having num there I won't be checking num and have to use i
        //if num % 3 === 0 -> fizz
        //if num % 5 === 0 -> buzz

        //else log the num

        //ask interviewer after writing this if this is tripping them up and if this looks right
    }
}

fizzBuzz(5) 
fizzBuzz(9)
fizzBuzz(15)

function fizzBuzz(nums){
    for(let i = 1; i<=num; i++){
        if(i % 5 === 0 && i % 3=== 0){
            return 'fizzbuzz'
        }else if(i % 5 === 0){
            return 'fizz'
        }else if(i % 3 === 0 ){
            return 'buzz'
        }else{
            return i
        }
    }
}

function fizzBuzz(nums){
    for(let i = 1; i<=num; i++){
        if(i % 5 === 0 && i % 3=== 0){
            return 'fizzbuzz'
        }else if(i % 5 === 0){
            return 'fizz'
        }else if(i % 3 === 0 ){
            return 'buzz'
        }else{
            return i
        }
    }
}
function fizzBuzz(nums){
    for(let i = 1; i<=num; i++){
        if(i % 5 === 0 && i % 3=== 0){
            return 'fizzbuzz'
        }else if(i % 5 === 0){
            return 'fizz'
        }else if(i % 3 === 0 ){
            return 'buzz'
        }else{
            return i
        }
    }
}