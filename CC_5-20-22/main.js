// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//P: will i get a string? will i get a neg num?
//R: finding avg and returning letter associated with avg, condtionals
//E: num1/num2/num = avg console avg == A
//P: avg 3 num and console with a conditional that gives a letter
function getGrade (s1, s2, s3) {
    // Code here
    let avg = s1 + s2 + s3 / 3
    if(avg <= 90 && avg <= 100){
        return 'A'
    }else if(avg >= 80 && avg < 90){
        return 'B'
    }else if(avg >= 70 && avg < 80 ){
        return 'C'
    }else if(avg >= 60 && avg <70){
        return 'D'
    }else if(avg >= 0 && avg < 60){
        return 'F'
    }
}

function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
  }