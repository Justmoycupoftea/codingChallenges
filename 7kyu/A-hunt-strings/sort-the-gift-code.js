// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
//P: will there be any capitol letters? Any special characters? alphabetical characters up to 26
//R: return string and organize in alphabet order
//E: // "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
//P: split the string, sort, and join, sorting works with letters and not only nums

function sortGiftCode(code){
    return code.split('').sort().join('');
  }