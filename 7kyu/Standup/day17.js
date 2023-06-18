// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//any special chars, spaces or anything


function removeDupeWords(str){
    //str -> split " " -> filter 
    //join with spaces to get indivdual words
    //split with spaces u compare words instead of letters
    return str.split(" ").filter((w,i,a) => w != a[i-1]).join(" ")
}

function removeMoreWords(str){
    return str.split(" ").filter((w,i,a) => w != a[i-1]).join(" ")
}

function removeWord(str){
    return str.split(' ').filter((w,a,i) => w!= i[a-1]).join(' ')
}
function removeWord(str){
    return str.split(' ').filter((w,a,i) => w!= i[a-1]).join(' ')
}
function removeWord(str){
    return str.split(' ').filter((w,a,i) => w!= i[a-1]).join(' ')
}
function removeWord(str){
    return str.split(' ').filter((w,a,i) => w!= i[a-1]).join(' ')
}

//one liner
const removeConsecutiveDuplicates = s => s.split(" ").filter((w,i,a) => w != a[i-1]).join(" ")

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//any special chars, spaces or anything, will it never not be a string, calrify getting a string
//return string with no consectuive duplicates

function remove(str){
    //remove something, use filter, need to split the string
    //str -> split " " -> filter 
    return str.split(" ").filter((w,i,a) => w != a[i-1]).join(' ')
    //look at index and current array and subtract one from it in the a[i-1]
}

function remove(str){
    //remove something, use filter, need to split the string
    //str -> split " " splits word and not indvidual letters -> filter 
    return str.split(" ").filter((w,i,a) => w != a[i-1]).join(' ')
    //look at index and current array and subtract one from it in the a[i-1]
}

function removeStr(str){
    return str.split(' ').filter((w,i,a)=> w != a[i-1]).join(' ')
    //put a space in split, you split the words and not letters
}

function removeStr(str){
    return str.split(' ').filter((w,i,a)=> w != a[i-1]).join(' ')
    //put a space in split, you split the words and not letters
    //filter out words that are not similar to ea other, filter out same words
}