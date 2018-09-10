/* project requirments: 
- The random number shown at the start of the game should be between 19 - 120.
- Each crystal should have a random hidden value between 1 - 12.
*/

// global variables
var targetNumber;
var wins = 0;
var losses = 0;
var sum;
var availableNumbers;
var crystalValues;

// reset function - to get everything ready before user interact(play) with a new game
function reset() {
    // make an array to store crystal values 
    crystalValues = [];
    // play score begins with 0 for each game
    sum = 0;
    // preapre target number for the game - call getTargetNumber function to pick a random number
    getTargetNumber();
    // prepare 4 values assoicate with the 4 crystal buttons - call setCrystalValues function to set and assign values into crystalValues arrary 
    setCrystalValues();  
    // show play score on the sum div 
    $("#sum").html(sum);
}   

// getTargetNumber funcion - to prepare the random number for each game
function getTargetNumber() {
    // set a range of random numbers 
    var minNumber = 19;
    var maxNumber = 120;
    // get random number
    targetNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber)
    // test out which number is picked
    console.log(targetNumber);
    // show random number on the target-number div
    $("#target-number").html(targetNumber);
}

// setCrystalValues function - to prepare values for each crystal and set the value associates with the crystal choices. 
function setCrystalValues(){
    // make an array to store a range of avaialbe/valid numbers 
    availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // make a for loop to get an unique value and push the value into the crystalValues array 
    for(i= 0; i < 4; i++){
        // use a Math.random() method to pick number randomly 
        var index = Math.floor(Math.random() * availableNumbers.length);
        var num = availableNumbers[index];
        // add the value into crystalValues array 
        crystalValues.push(num);
        // delete the number has chosen from the availableNumbers array to avoid a duplicated number assigns to the next crystal value in a same game
        availableNumbers.splice(index, 1);
    }
    // check what values have assigned to the four crystals
    console.log(crystalValues);
}

// reset after page is reloaded
$(document).ready(reset());


// play begins - user clicks any crystal button to start the game
// make each crystal value as an addend when user clicks an associated button
$(".crystal").click(function(){
    // get the index of crystal value based on the associated button is clicked 
    var index = this.value;
    // add the crytal value each time user clicks a particular crystal button
    sum += crystalValues[index];
    // show sum on the page
    $("#sum").html(sum);

    // use if condition to set the game to be continued or stopped 

    // if sum = targetnumber -- wins >> reset the game, wins + 1
    if (sum === targetNumber){
        // count the wins
        wins++;
        $("#wins-count").html(wins);
        //test out to see what shows up when user wins the game 
        console.log("you won");
        // call reset funtion to restart the game
        reset();
    }
    // if sum > targetnumber -- losses >> reset the game, losses + 1
    if (sum > targetNumber){
        // count the losses
        losses++;
        $("#losses-count").html(losses);
        //test out to see what shows up when user losses the game 
        console.log("you lose");
        // call reset funtion to restart the game
        reset();
    }
});








