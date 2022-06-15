// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

//PREP
//P:will there be capitol letters?
//R: return +4 for each letter that matches else -1 if it doesn't
//E: ['a','b'] == ['a','b'] = +8
//P: array1.split() check each indivdual is equal to ea other +4 if yes else if -1 and '' = 0

//trying to for of loop to get the letters out then compare if they are == and if they are += 4 else if -1 !== else if '' return 0
// let array1 =['a','b']
// let array2 =['a','b']
// function checkExam(array1, array2) {
//     // good luck
//     for( grade of array1){
//         console.log(grade);
//     }
//     for( grade2 of array2)
//         console.log(grade2)
    
// }

function checkExam(array1, array2) {
    var score = 0;
      for (var i = 0; i < array2.length; i++){  //[i] checks each indvidual letter position 0,1,2,3 and that matches the letter
          if (array2[i] === ""){
             score += 0
          } else if (array1[i] === array2[i]){
              score += 4
          } else if (array1[i] !== array2[i]){
             score -= 1
          }
      } 
        if (score >= 0){
          return score;
        } else {
          return 0
        }
}
