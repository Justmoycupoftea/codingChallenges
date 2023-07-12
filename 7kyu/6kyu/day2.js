// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


function likes(names) {
    const totalLikes = names.length;
  
    if (totalLikes === 0) {
      return "no one likes this";
    } else if (totalLikes === 1) {
      return names[0] + " likes this";
    } else if (totalLikes === 2) {
      return names[0] + " and " + names[1] + " like this";
    } else if (totalLikes === 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      return names[0] + ", " + names[1] + " and " + (totalLikes - 2) + " others like this";
    }
}

// It first determines the total number of likes by checking the length of the names array.
// Based on the number of likes, it uses conditional statements to return the appropriate display text.
// If there are no likes (empty array), it returns "no one likes this".
// If there is one like, it returns the name of the person followed by "likes this".
// If there are two likes, it returns the names of the two people separated by "and" and followed by "like this".
// If there are three likes, it returns the names of the three people separated by commas, with the last name preceded by "and" and followed by "like this".
// If there are more than three likes, it returns the names of the first two people separated by commas, followed by "and" and the count of the remaining likes, and ends with "like this"

function likes(names) {
    const totalLikes = names.length;
  
    if (totalLikes === 0) {
      return "no one likes this";
    } else if (totalLikes === 1) {
      return names[0] + " likes this";
    } else if (totalLikes === 2) {
      return names[0] + " and " + names[1] + " like this";
    } else if (totalLikes === 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      return names[0] + ", " + names[1] + " and " + (totalLikes - 2) + " others like this";
    }
}