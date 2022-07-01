// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
//P: will there be negative numbers in the array? are they all whole numbers?
//R: return the array the same, but with the lowest number removed
//E: 1,2,2,2,1 1 at the beginning would be removed due to low index and 1 being lowest
//P: use a find method? can't sort

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers)); //find smallest in array
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]; //remove lowest index of num if the same
}

//another soln
function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
}