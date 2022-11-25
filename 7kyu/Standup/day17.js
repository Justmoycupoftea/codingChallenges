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

//one liner
const removeConsecutiveDuplicates = s => s.split(" ").filter((w,i,a) => w != a[i-1]).join(" ")
