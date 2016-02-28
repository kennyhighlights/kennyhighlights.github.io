//create secretNumber

var secretNumber=4;

//ask user for guess
var guess=Number(prompt("Guess a number?"));

//check guess
if(guess === secretNumber) {
	alert("You're got it right!");
}

else if(guess > secretNumber) {
	alert("Too high!");
}

else (guess < secretNumber){
	alert("Too low!")
}
