// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOddOccurrence(arr) {
    const frequencyMap = {}; // Object to store the frequency of each element
  
    // Count the occurrences of each element in the array
    // after looping add +1 to keep count of ea time the num occurs
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Find the element with an odd occurrence
    for (const num in frequencyMap) {
      if (frequencyMap[num] % 2 === 1) {
        return parseInt(num); // Convert back to an integer before returning
      }
    }
  }
  
  // Test cases
  console.log(findOddOccurrence([7])); // Output: 7
  console.log(findOddOccurrence([0])); // Output: 0
  console.log(findOddOccurrence([1, 1, 2])); // Output: 2
  console.log(findOddOccurrence([0, 1, 0, 1, 0])); // Output: 0
  console.log(findOddOccurrence([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output: 4

//   This function first creates a frequency map using an object and then iterates through the map to find the element with an odd occurrence, which is then returned as the result.

function findOddOccurrence(arr) {
    const frequencyMap = {}; // Object to store the frequency of each element
  
    // Count the occurrences of each element in the array
    // after looping add +1 to keep count of ea time the num occurs
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Find the element with an odd occurrence
    for (const num in frequencyMap) {
      if (frequencyMap[num] % 2 === 1) {
        return parseInt(num); // Convert back to an integer before returning
      }
    }
  }

  function findOddOccurrence(arr) {
    const frequencyMap = {}; // Object to store the frequency of each element
  
    // Count the occurrences of each element in the array
    // after looping add +1 to keep count of ea time the num occurs
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Find the element with an odd occurrence
    for (const num in frequencyMap) {
      if (frequencyMap[num] % 2 === 1) {
        return parseInt(num); // Convert back to an integer before returning
      }
    }
  }

  function findOddOccurrence(arr) {
    const frequencyMap = {}; // Object to store the frequency of each element
  
    // Count the occurrences of each element in the array
    // after looping add +1 to keep count of ea time the num occurs
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Find the element with an odd occurrence
    for (const num in frequencyMap) {
      if (frequencyMap[num] % 2 === 1) {
        return parseInt(num); // Convert back to an integer before returning
      }
    }
  }
  function findOddOccurrence(arr) {
    const frequencyMap = {}; // Object to store the frequency of each element
  
    // Count the occurrences of each element in the array
    // after looping add +1 to keep count of ea time the num occurs
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Find the element with an odd occurrence
    for (const num in frequencyMap) {
      if (frequencyMap[num] % 2 === 1) {
        return parseInt(num); // Convert back to an integer before returning
      }
    }
  }

  function findOddOccurrence(arr) {
    const frequencyMap = {}; // Object to store the frequency of each element
  
    // Count the occurrences of each element in the array
    // after looping add +1 to keep count of ea time the num occurs
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Find the element with an odd occurrence
    for (const num in frequencyMap) {
      if (frequencyMap[num] % 2 === 1) {
        return parseInt(num); // Convert back to an integer before returning
      }
    }
  }

  function findOddOccurrence(arr) {
    const frequencyMap = {}; // Object to store the frequency of each element
  
    // Count the occurrences of each element in the array
    // after looping add +1 to keep count of ea time the num occurs
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Find the element with an odd occurrence
    for (const num in frequencyMap) {
      if (frequencyMap[num] % 2 === 1) {
        return parseInt(num); // Convert back to an integer before returning
      }
    }
  }
  