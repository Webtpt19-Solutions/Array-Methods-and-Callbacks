import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
function consoleLogData(fifaData){
    for(let i = 0; i < fifaData.length; i++){
        if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final"){
            console.log(` TASK #1 \n
                Home Team ${fifaData[i]["Home Team Name"]}\n
                Away Team: ${fifaData[i]["Away Team Name"]}\n
                Home Team Score: ${fifaData[i]["Home Team Goals"]}\n
                Away Team Score: ${fifaData[i]["Away Team Goals"]}\n
                Winners: ${fifaData[i]["Home Team Name"]}`)
            }
    }
};

consoleLogData(fifaData);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalsData = [];

    data.forEach(item => {
        if(item.Stage === "Final"){
            finalsData.push(item)
        }
    });

    return finalsData
};
console.log('TASK #2', getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// What is this asking me to do? All the years what dataset? This is a bad question
function getYears(cb) {
    const years = cb.map(final => {
        return final.Year
    });

    return years
};

console.log('TASK #3', getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

// THIS IS ANOTHER AWFUL EXAMPLE OF CALLBACKS.... ALSO WHERE IS TASK 4!?!? DOES ANYONE PROOF READ THESE !?!?!?!?!?!?!?!?
function getWinners(cb) {
    const winners = cb.map(item => {
        let homeScore = item["Home Team Goals"]
        let awayScore = item["Away Team Goals"]
        if(homeScore > awayScore){
            return item["Home Team Name"]
        } else {
            return item["Away Team Name"]
        }
    });

    return winners
};

console.log('TASK #5', getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWin, cbYrs) {
    const strings = []
    for(let i = 0; i < cbWin.length; i++){
        strings.push(`In ${cbYrs[i]}, ${cbWin[i]} won the world cup!`)
    }
    return strings
};

console.log('task #6', getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeGoalAvg = data.reduce((acc, num, index, array) => {
        acc += num["Home Team Goals"]
        if(index === array.length - 1){
            return acc / array.length
        } else {
            return acc
        }
        
    }, 0)

    const awayGoalAvg = data.reduce((acc, num, index, array) => {
        acc += num["Away Team Goals"]
        if(index === array.length - 1){
            return acc / array.length
        } else {
            return acc
        }
 
    }, 0)

    return {
        homeAvg: homeGoalAvg,
        awayAvg: awayGoalAvg
    }
};

console.log('TASK #7', getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
