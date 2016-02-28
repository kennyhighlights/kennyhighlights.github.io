var express = require('express');
var app = express();

app.get("/", function (req, res) {
	res.send("Hi there, welcome to my assignment!")
})

app.get("/speak/:animal", function(req, res){
	var animalName = req.params.animal.toLowerCase();
	// var sound ="";
	// if(animalName === "pig"){
	// 	sound = "anink"
	// } else if(animalName = "cow"){
	// 	sound = "moo"
	// }
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof",
		cat: "I hate you human",
	}
	res.send("The " + animalName + " says \"" + sounds[animalName] + "\"!")
})

app.get("/repeat/:word/:numberOfTimes", function(req, res){
	var numberOfTimes = Number(req.params.numberOfTimes);
	var word = req.params.word;
	var result = "";
	for (var i = 0; i < numberOfTimes; i++){
		result += word + " ";
	};
	res.send(result);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found.")
})

app.listen(3000, function(){
	console.log("Running server!");
});
