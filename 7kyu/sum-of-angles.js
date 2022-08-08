// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
//find polygon equation
function angle(n) {
    //code here
        if (n < 3)
          return 0;
      return (n - 2) * 180;
  }
  //formula
  function angle(n) {
    return 180*(n-2); //need to use * or else 180 won't multiple
  }