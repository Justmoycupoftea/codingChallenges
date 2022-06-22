// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//P:will there be negative nums? will there be decimals?
//R: return an array of nums only
//E: example [1,2,3, '21'] -> [1,2,3]
//P: filter the list and return the numbers in array

function filter_list(l) {
    return l.filter(v => typeof v == "number")
}

//another soln
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}
