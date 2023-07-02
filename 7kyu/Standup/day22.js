// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//build object
//will it always be a string, empty string, nothign special?


function countChars(str){
//loop through string and pull off ea letter, then build an object with that letter, keep adding 1 to a and b, so a ++
//create obj
    let countObj = {}
//loop -> through to see if value exist ? val++ : val-1, no exist put value into obj so a 1
    for(const c of str){
        //grabs ea char from string
        if( countObj[c] ){
        //this is only true if value inside object [c] is checking if exist inside obj
        countObj[c]++
        }else{
            countObj[c] = 1
        }
    }
    return countObj
    //if obj empty return nothing, loop doesn't work

}

console.log(countChars('aba'), "{'a': 2, 'b': 1}")



//leon's soln
function countChars(str){
    //create obj
    let countObj = {}
    //loop -> check val exist ? val++ : val-1
    for(const c of str){
        //loop moves through each char in string
        if( countObj[c] ){
            countObj[c]++
        }else{
            countObj[c] = 1
        }
    }
    return countObj

}

console.log(countChars('aba'), "{'a': 2, 'b': 1}")
console.log(countChars('dog'), "{'d': 1, 'o': 1, 'g':1}")
console.log(countChars('abba'), "{'a': 2, 'b': 2}")

// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//build object
//will it always be a string, empty string, nothign special?

function countChars(str){
    //loop through string and pull off ea letter, then build an object with that letter, keep adding 1 to a and b, so a ++
    //create obj
        let countObj = {}
    //loop -> through to see if value exist ? val++ : val-1, no exist put value into obj so a 1
        for(const c of str){
            //grabs ea char from string
            if( countObj[c] ){
            //this is only true if value inside object [c] is checking if exist inside obj
            countObj[c]++
            }else{
                countObj[c] = 1
            }
        }
        return countObj
        //if obj empty return nothing, loop doesn't work
}

function countChars(str){
    //loop through string and pull off ea letter, then build an object with that letter, keep adding 1 to a and b, so a ++
    //create obj
        let countObj = {}
    //loop -> through to see if value exist ? val++ : val-1, no exist put value into obj so a 1
        for(const c of str){
            //grabs ea char from string
            if( countObj[c] ){
            //this is only true if value inside object [c] is checking if exist inside obj
            countObj[c]++
            }else{
                countObj[c] = 1
            }
        }
        return countObj
        //if obj empty return nothing, loop doesn't work
    
}

function countChars(str){
    let countobjects = {}
    for(const c of str){
        if (countobjects[c]){
            countobjects[c]++
        }else{
            countobjects[c] = 1
        }
    }
    return countobjects
}

function countChars(str){
    let countobjects = {}
    for(const c of str){
        if (countobjects[c]){
            countobjects[c]++
        }else{
            countobjects[c] = 1
        }
    }
    return countobjects
}

