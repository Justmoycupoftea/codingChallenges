//PREP

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

parameter is time

need an equation for .5l of water per hour 
.5l per hour .5l * 1

return Math.floor() 

examples: 3 hours = 1 liter of water bc rounding down

Math.floor() rounds down to lowest integer, we need time ridden per hour * .5 liters of water

return Math.floor(time * .5)

//PREP
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

//parameter cap = amount of people bus can hold
// on = is number of people on the bus
// wait  = number of people wiating to get on

// we need to return cap which is total the amount of people it holds - wait that is people trying to get on
// if enough space return 0 else if return `he can'\t fit ${on - wait} of the ${wait}`

let total = cap - on
if(total - wait == 0){
    return 0
}else if(total - wait > 0){
    return 0
}else{
    return wait - total
}

