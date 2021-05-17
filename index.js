var ComputerGuess;
var userGuesses= [];

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
    startGameView();
}

function hardMode(){
    startGameView();
}

function compareGuess(){
    const userGuess = Number(document.getElementById("inputbox").value);
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerText = userGuesses;

    if(userGuess > ComputerGuess){
        document.getElementById("textOutput").innerHTML = "Your guess is too high";
        document.getElementById("inputbox").value = ""; 
    }
    else if(userGuess < ComputerGuess){
        document.getElementById("textOutput").innerHTML = "Your guess is too low";
        document.getElementById("inputbox").value = ""; 
    }
    else{
        document.getElementById("textOutput").innerHTML = "Correct! You got in ";
    }

    
}