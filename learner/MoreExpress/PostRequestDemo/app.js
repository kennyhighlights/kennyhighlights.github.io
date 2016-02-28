var express = require("express");
var bodyParser = require("body-parser")
var app = express();

var friends = ["Tony", "Miranda", "Justin", "Pierre"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
})

app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
})

app.post("/addfriend", function(req, res){
	// console.log(req.body.newfriend);
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	// res.send("YOU HAVE REACHED THE POST ROUTE.")
	res.redirect("/friends");
})

app.listen(3000, function(){
	console.log("Server is listening!");
})