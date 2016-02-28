var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"

app.get("/bye", function(req, res){
	res.send("Goodbye!");
});

// "/dog" => "MEOW!"

app.get("/dog", function(req, res){
	console.log("Someone made a request to /dog.")
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
	console.log(req.params)
	res.send("This is a comment page!");
})
// app.get("/r/:subredditName/")

app.get("*", function(req, res){
	res.send("404 not found.");
})



app.listen(3000, process.env.IP, function(){
	console.log("Server started at 3000!")
})
