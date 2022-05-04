// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name){
    if(name.startsWith('R' || name.startsWith('r'))){
    console.log (name = name + 'plays banjo')
    }else{
        console.log (name = name + 'does not play banjo')
    }
}

//easier soln

const areYouPlayingBanjo = name => {
    const plays = name.toLowerCase().startsWith('r')
      ? 'plays'
      : 'does not play';
    return `${name} ${plays} banjo`;
  }

//other soln
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
  }

//more soln
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }
  