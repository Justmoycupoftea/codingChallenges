// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



//will it always be arrays, pos nums, whole nums, neg nums? special chars?

function arrDiff(a,b) {
if(a.length === 0 || b.length === 0){ return a }

//filter out values that appear in b

return a.filter(function(x) {return b.indexOf(x) == -1;})

}

function arrDiff(a,b) {
    //using sets
    let newSet = new Set(b)
    //check if each num is not in the set
    //filter out values that new not appear in this set 'n'
    return a.filter(n => !newSet.has(n))
    //!newSet.has(n) goes thru array checks if b is in a and returns filtered a
    //has and set happens in constant time vs array in linear time
    //sets more in modern problems
    }

function arrayDiff(a, b) {
//   if(a.length === 0 || b.length === 0){ return a }
//understand set pops up in interview a bit

    let newSet = new Set(b)
    return a.filter(n => !newSet.has(n) )

}

function arrayDiff1(a, b) {
    let newSet1 = new Set(b)
    //filter everything in a and compare what it doesn't have in b, return the different elements in b
    return a.filter(n => !newSet1.has(n))
}

function arrayDiff1(a, b) {
    let newSet1 = new Set(b)
    //filter everything in a and compare what it doesn't have in b, return the different elements in b
    return a.filter(n => !newSet1.has(n))
}

function checkDiff(a,b) {
    //declearing a new set using the second param 'b'
    let newSet1 = new Set (b)

    //filter everything out of a that is in 'b' the second param
    //and return a new filtered a
    //use .has in sets bc of constant time better than linear
    return a.filter(n => !newSet1.has(n))
}

//sets use constant time and not linear so faster
function checkDiff(a,b) {
    let newSet = new Set(b)
    return a.filter(n => !newSet.has(n))
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



//will it always be arrays, pos nums, whole nums, neg nums? special chars?