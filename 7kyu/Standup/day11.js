// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//will it alays be words, will it be empty, any spaces or special characters
//return sorted array of words and the last letter of each word

function last(x){
    //split sort
    //sort -> charAt()
    //grabs the word and gets last letter with .length - 1
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

function last(x){
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

//console log test cases
console.log(sortLastChar())

//doing in ES6 one line
const last = ( l ) => l.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))

function last(x) {
    return x.split('').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

function last(x) {
    return x.split('').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

function last(x) {
    return x.split('').sort((a,b)=> a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//will it alays be words, will it be empty, any spaces or special characters
//return sorted array of words and the last letter of each word

//sort string in order by the last letter of each word, grab last letter

function lasty(x) {
//use a sort, have to split and sort array
//sort is lexigraphical, sorts by letters already
//grab last letter and can sort it
return x.split('').sort((a,b)=> a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
//charcodeat treats the string as an index, charcode starts counting at 0
//comparing letters to each other with sort

}

//doing in ES6 one line
const last = ( l ) => l.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))