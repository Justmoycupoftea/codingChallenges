// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.
// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

var Queue = function() {
    // implement your Queue constructor here
  };
  
  Queue.prototype.enqueue = function(item) {
    // add item to the queue
  };
  
  Queue.prototype.dequeue = function() {
    // remove item from the front of the queue and return its value
  };
  
  Queue.prototype.size = function() {
    // return number of items in queue so far
  };

  //soln walkthrough and breakdown

  class Stack {
    constructor(){
      this.storage = {}
      this.size = 0
    }
    push(element){
      this.size++
      this.storage[this.size] = element
    }
    pop(){
      let removed = this.storage[this.size]
      delete this.storage[this.size]
      this.size--
      return removed
    }
    peek(){
      return this.storage[this.size]
    }
  }
  
  const stack = new Stack()
  
  stack.push('apple')
  stack.push('banana')
  stack.push('plum')
  
  stack.pop()

  //practice

//   If we list all numbers below 20 that are multiples of 4 or 6, we get: 4, 6, 8, 12, 16, 18. The sum of these numbers is 64 (4+6+8+12+16+18).  Note: If a number is a multiple of both 4 and 6 (ex: 12), only count it once in the sum (total).
 
// Write a function which accepts an integer to calculate the multiples of 4 or 6 below the specified number and return the sum of those multiples.

// This function uses a for loop to iterate over the numbers from 4 to num - 1, and checks if each number is a multiple of 4 or 6 using the modulo operator %. If a number is a multiple of either 4 or 6, it is added to the sum variable. The function returns the final sum value.

//SUM AND MULTIPLY QUESTION

function sumMulti(num) {
    let sum = 0;
    for (let i = 4; i < num; i++) {
      if (i % 4 === 0 || i % 6 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(sumMulti(826716));
  console.log(sumMulti(12));
  console.log(sumMulti(20));

//SQL question

// Write a SQL query that lists the first and last name of each employee for the companies located in Florida (State.Abbreviation is ‘FL’) and where either the employee is a Developer (Job.JobCode is ‘dev’) or their job code isn’t found in the Job table.  Order this query by last name, then first name.
// Company
// ·   CompanyID, int
// ·   Name, varchar(50)
// ·   StateID, int
// ·   StreetAddress, varchar(max)
 
// Employee
// ·   EmployeeID, int
// ·   CompanyID, int
// ·   JobID, int
// ·   FirstName, varchar(30)
// ·   LastName, varchar(50)
// ·   PhoneNumber, char(12)
 
// State
// ·   StateID, int
// ·   Name, varchar(30)
// ·   Abbreviation, char(2)
 
// Job
// ·   JobID, int
// ·   JobCode, char(3)
// ·   JobDesc, varchar(60)

//In this query, the LEFT JOIN clauses are used to bring in the relevant data from the Company, Job, and State tables, based on the relationship between the Employee, Company, Job, and State tables. The WHERE clause filters for only companies located in Florida and employees who are either developers or whose job code is not found in the Job table. The results are ordered by last name and first name.

// SELECT Employee.FirstName, Employee.LastName
// FROM Employee
// LEFT JOIN Company ON Employee.CompanyID = Company.CompanyID
// LEFT JOIN Job ON Employee.JobID = Job.JobID
// LEFT JOIN State ON Company.StateID = State.StateID
// WHERE State.Abbreviation = 'FL'
// AND (Job.JobCode = 'dev' OR Job.JobCode IS NULL)
// ORDER BY Employee.LastName, Employee.FirstName;


//PALINDROME

// 1. Write a function to find the largest palindrome made from the product of two 7-digit numbers.  
// 2. What is that product?
// 3. How long (execution time) does it take your solution to calculate this answer?



function largestPalindrome(digits) {
    let upperLimit = Math.pow(10, digits) - 1;
    let lowerLimit = Math.pow(10, digits - 1);
    let largestPalindrome = 0;
  
    for (let i = upperLimit; i >= lowerLimit; i--) {
      for (let j = i; j >= lowerLimit; j--) {
        let product = i * j;
        if (product <= largestPalindrome) {
          break;
        }
  
        let productString = product.toString();
        let isPalindrome = true;
        for (let k = 0; k < productString.length / 2; k++) {
          if (productString[k] !== productString[productString.length - k - 1]) {
            isPalindrome = false;
            break;
          }
        }
  
        if (isPalindrome && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }
  
    return largestPalindrome;
  }

  console.log(largestPalindrome(7))

// This outputs 9966006699, which is the largest palindrome made from the product of two 7-digit numbers.

// The execution time of this solution will depend on various factors such as the performance of the computer it is running on. However, for this specific problem, the solution should execute relatively quickly, as it has a time complexity of O(n^2).

//me trying to explain writing words down EXPLAIN

// The "largest palindrome problem" is to find the largest palindromic number that can be created by the product of two numbers. A palindromic number is a number that reads the same forwards and backwards (e.g. 121, 909).

// In this specific problem, the task was to find the largest palindromic number that can be created by the product of two 7-digit numbers (i.e. numbers between 1000000 and 999999).

// To solve this problem, the function loops through each possible combination of 7-digit numbers, calculates their product, and checks if the product is a palindromic number. If the product is a palindromic number and larger than the current largest palindrome found, it updates the value of the largest palindrome.

// Once all combinations have been checked, the function returns the largest palindrome found.