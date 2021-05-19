var ComputerGuess;
var userGuesses= [];
var attempts=0;
var maxGuesses;

let low =1;
let high = 100;

function updateRange(){
    const rangeOutput = document.getElementById("rangeOutput");
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft =low + "%";
    rangeOutput.style.marginRight =100 - high +"%";

    const lowValue = document.getElementById("low");
    lowValue.style.flex = low + "%";

    const spaceValue = document.getElementById("space");
    spaceValue.style.flex = high - low + "%";

    const highValue = document.getElementById("high");
    highValue.style.flex = 100 - high + "%"; 
    
}

function newGame(){
    window.location.reload();
}

function gameEnded(){
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputbox").setAttribute("readonly","readonly");
}

function init(){
    ComputerGuess = Math.floor(Math.random()*100+1);
    console.log(ComputerGuess);
    document.getElementById("Game_Area").style.display = "none";
    document.getElementById("newGameButton").style.display = "none";
}

function startGameView(){
    document.getElementById("Welcome_Screen").style.display = "none";
    document.getElementById("Game_Area").style.display = "block";
}

function easyMode(){
    maxGuesses=10;
    startGameView();
}

function hardMode(){
    maxGuesses=5;
    startGameView();
}

function compareGuess(){
    const userGuess = Number(document.getElementById("inputbox").value);
    userGuesses.push(" " + userGuess);

    attempts++;
    document.getElementById("guesses").innerText = userGuesses;
    document.getElementById("inputbox").value = "";
    
    if(attempts < maxGuesses){
        if(userGuess > ComputerGuess){
            
            if(userGuess < high){
                high = userGuess;
            }
            document.getElementById("textOutput").innerHTML = "Your guess is too high";
        }
        else if(userGuess < ComputerGuess){
            
            if(userGuess > low){
                low = userGuess;
            }
            document.getElementById("textOutput").innerHTML = "Your guess is too low"; 
        }
        else{
            document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts +" Attempts";
            gameEnded();
        }    
    }
    else{
        if(userGuess > ComputerGuess || userGuess < ComputerGuess){
            document.getElementById("textOutput").innerHTML = "!!! You LOSE !!! The number was " + ComputerGuess;
            gameEnded();
        }
        else{
            document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts +" Attempts";
            gameEnded();
        }
    }
    updateRange();  
}