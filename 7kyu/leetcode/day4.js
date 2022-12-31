// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//will there be negative nums, decimals, special chars, strings, anything other than a num, empty arrays
//return the majority num
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
//make hash map to return the most repeated num

function majorityElement(arr){
    let elem = {},
        count = 0,
        majElem = [0]
    
    for(const num of arr){
            elem[num] = elem[num] + 1 || 1
            //can use shorter way
            //elem[num] > arr.length / 2
    }

    for(const n in elem){
        if(elem[n] > count){
            count = elem[n]
            majElem = n
        }
    }

    return majElem
}

function majorityElement(arr){
    let elem = {},
        count = 0,
        majElem = [0]

    for(const num of arr){
        elem[num] = elem[num] + 1 || 1
    }

    for(const n in elem){
        if(elem[n] > count){
            count = elem[n]
            majElem = n
        }
    }

    return majElem


}

//brute force using count
function majorityElement(arr){
    let elem = {},
    count = 0,
    //how many times a num appears that what count id for, keeps track majority element
    //build out an object to keep track of count
    majElem = arr[0] //whatever majority element is, it fills heres

    for(const num of arr){
        elem[num] = elem[num] + 1 || 1
        //num is the parameter, loops through to count how many times a num repeats
        //keeps track of how many times a element pops up
    }

    for(const n in elem){
        //look for ea property in elem
        if(elem[n] > count){
            count = elem[n]
            majElem =[n]
            //looping through object finding which one occurs the most
        }
    }
    return majElem

}

//using no count
function majorityElement(arr){
    arr.sort()
    return arr[Math.floor(arr.length/2)]
    //this works too
    //the algo behind sort is quicksort
    //more optimized, google chrome v8 uses quicksort, firefox uses mergesort

    let elem = {}
    majElem = arr[0]

    for(const num of arr){
        elem[num] = elem[num] + 1 || 1
        elem[num] > arr.length / 2
        //shorter way divide length
        //becomes majority element, a num that is taking up more than half of the array
    }
}