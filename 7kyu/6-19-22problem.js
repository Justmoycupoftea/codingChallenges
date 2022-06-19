// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//return highest and lowest from string with highest being first
//P: any decimal numbers?
//R: return highest and lowest num
//E: ('1, 2, 3, 4, 5') --> 5,1
//P: split up the string, sort, return highest and lowest as a string, so join?
function highAndLow(numbers){
    const arr = numbers.split(" ").map(Number).sort((a,b) => b - a) //where i messed up didn't copy the array with map
    //b-a sorting from highest to lowest instead of lowest to highest
    return arr[0] + " " + arr[arr.length - 1] //highest number displayed first [0]

}

