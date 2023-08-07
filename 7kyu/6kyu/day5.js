// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    // Base case: if n is a single-digit number, return n
    if (n < 10) {
      return n;
    }
  
    let sum = 0;
  
    // Calculate the sum of digits
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
  
    // Recursively calculate digital root of the sum
    return digitalRoot(sum);
  }
  
  // Example usage
  const number = 9875;
  const result = digitalRoot(number);
  console.log(`The digital root of ${number} is ${result}`);

//   Replace the number variable with the non-negative integer you want to find the digital root of. The digitalRoot function takes care of calculating the digital root using recursion and returns the final single-digit result.
  
function digitalRoot(n) {
    // Base case: if n is a single-digit number, return n
    if (n < 10) {
      return n;
    }
  
    let sum = 0;
  
    // Calculate the sum of digits
    //we % 10 cuz we want a single digit num returned
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
  
    // Recursively calculate digital root of the sum
    return digitalRoot(sum);
  }

function digRoot(n){
    if (n < 10){
        return n;
    }

    let sum = 0;

    while (n > 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    
    }
    return digRoot(sum)
}

  
function digRoot(n){
    if (n < 10){
        return n;
    }

    let sum = 0;

    while (n > 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    
    }
    return digRoot(sum)
}

function digRoot(n){
    if (n < 10){
        return n;
    }

    let sum = 0;

    while (n > 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    
    }
    return digRoot(sum)
}


function digRoot(n){
    if (n < 10){
        return n;
    }

    let sum = 0;

    while (n > 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    
    }
    return digRoot(sum)
}

function digRoot(n){
    if (n < 10){
        return n;
    }

    let sum = 0;

    while (n > 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    
    }
    return digRoot(sum)
}