// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
const rps = (p1, p2) => {
    if (p1 == 'scissors' && p2 == 'paper'){
      return 'Player 1 won!'
    }else if(p1 == 'scissors' && p2 == 'scissors'){
      return 'Draw!'
    }else if(p1 == 'scissors' && p2 == 'rock'){
      return 'Player 2 won!'
    } 
}
//simple soln
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
};
// rules is an object, all objects have keys and values inside a curly brackets. Ex.:

// var obj = { key1: value1, key2: value2, key3: value3, }

// to access a value of an object, you have two ways: (first way) obj.key1 (second way) obj['key1'] So, if u want to get the value "paper" from that object called rules,
// u can do like this => rules.scissors <= or u can do this way as well => rules['scissors'] <= PS.: The sencond way to access the value of an object, it will be an string inside a brackcets obj['string']. 
// The function rps(string, string) will always receive an string as parameters. At the if statement "if (p2 === rules[p1])" // rps('paper', 'rock') // if ('rock' === 'rock') return 'Player 1 won!'