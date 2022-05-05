// Use variables to find the sum of the goals Messi scored in 3 competitions

// Messi goal scoring statistics:

// Competition	Goals:
// La Liga	43
// Champions League	10
// Copa del Rey	5

// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals

// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

let laLigaGoals = 43
let championsLeagueGoals = 10
let copaDelReyGoals = 5

let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

function allGoals(){
    return totalGoals.reduce()
}

//other soln
let array = [laLigaGoals,championsLeagueGoals,copaDelReyGoals] = [43,10,5]

let totalGoals  = array.reduce((a,b) => a + b)