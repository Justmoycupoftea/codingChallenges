// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//will it always be a string, any nums, spaces special chars, neg nums
//return string of characters reversed
//hello -> olleh
//take in a string, split(), reverse(), and join('')

function reverseStr(str){
    //don't forget to use '' in split or else it'll split the word and not letters
    return str.split('').reverse().join('')
}


function reverseStr(str){
    //don't forget to use '' in split or else it'll split the word and not letters
    return str.split('').reverse().join('')
}

console.log(reverseStr('bob'))
console.log(reverseStr('hello'))
console.log(reverseStr('shoes'))

//leon's soln
//bring in input that is a string of characters
//letters only?
//str -> char
//str -> str rev

function reverseString(str){
    //return s/r/j
    // return str.split('').reverse().join('')
    //can't use reverse method
    //leon -> noel - empty str -> loop add each char
    let reverseStr = ""
    for(let char of str){
        reverseStr = char + reverseStr
    }
    return reverseStr

}

console.log(reverseString)(('bob'), 'bob')
console.log(reverseString)(('john'), 'nhoj')
console.log(reverseString)(('sarah'), 'haras')

// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 
//NO REVERSE METHOD

//will it always be a string, any nums, spaces special chars, neg nums
//return string of characters reversed
//hello -> olleh
//take in a string, split(), reverse(), and join('')

//take in str --> char
//str -> str rev
//get same thing that comes out that goes in but reversed

function reverseString(str){
    let reverseStr = ""
    //loop through string, move through each char with loop then add to empty string
    for(let char of str){
        reverseStr = char + reverseStr
    }
    return reverseStr
}

function reverse(str){
    let newStr = ""

    for(let char of str){
        //loop through string return ea letter and combine into new reversed string
        newStr = char + newStr
    }
    return newStr
}

function reverse(str){
    let newStr = ""

    for(let char of str){
        //loop through string return ea letter and combine into new reversed string
        newStr = char + newStr
    }
    return newStr
}

function reverse(str){
    let newStr = ""

    for(let char of str){
        //loop through string return ea letter and combine into new reversed string
        newStr = char + newStr
    }
    return newStr
}
