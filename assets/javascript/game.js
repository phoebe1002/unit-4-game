// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.

// variables
var targetNumber;
var wins = 0;
var losses = 0;
var sum;
// var sphere;
// var gem;
// var sapphire;
// var swarovski;
var availableNumbers;
var crystalValues;

function reset() {
    crystalValues = [];
    sum = 0;
    getTargetNumber();
    setCrystalValues();  
    $("#sum").html(sum);
}   


function setCrystalValues(){
    availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    for(i= 0; i < 4; i++){
        var index = Math.floor(Math.random() * availableNumbers.length);
        var num = availableNumbers[index];
        crystalValues.push(num);
        availableNumbers.splice(index, 1);
    }
    console.log(crystalValues);
}



function getTargetNumber() {
    var minNumber = 19;
    var maxNumber = 120;
    targetNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber)
    console.log(targetNumber);
    $("#target-number").html(targetNumber);
}

//window.load() -- not sure use this or document.ready()
$(document).ready(reset());
console.log( "ready!" );

$(".crystal").click(function(){
    var index = this.value;
    sum += crystalValues[index];
    $("#sum").html(sum);

    // if sum < targetnumber -- continue the game
    // if sum = targetnumber -- wins >> reset the game, wins + 1
    // if sum > targetnumber -- losses >> reset the game, losses + 1
    if (sum === targetNumber){
        wins++;
        $("#wins-count").html(wins);
        // $("#wins-count").append("You won");
        console.log("you won");
        reset();
    }
    if (sum > targetNumber){
        losses++;
        $("#losses-count").html(losses);
        // $("#losses-count").html("You lose");
        console.log("you lose");
        reset();
    }
});








