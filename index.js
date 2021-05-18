var ComputerGuess;
var userGuesses= [];
var attempts=0;
var maxGuesses;

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
            document.getElementById("textOutput").innerHTML = "Your guess is too high";
        }
        else if(userGuess < ComputerGuess){
            document.getElementById("textOutput").innerHTML = "Your guess is too low"; 
        }
        else{
            document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts +" Attempts";
        }    
    }
    else{
        if(userGuess > ComputerGuess || userGuess < ComputerGuess){
            document.getElementById("textOutput").innerHTML = "!!! You LOSE !!! The number was " + ComputerGuess;
        }
        else{
            document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts +" Attempts";
        }
    }
    
}