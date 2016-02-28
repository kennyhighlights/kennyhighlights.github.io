var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

	var campgrounds = [
	{name: "Salmon", image: "https://farm4.staticflickr.com/3514/3844623716_427ed81275.jpg"},
	{name: "Granite Hill", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
	{name: "Salmon", image: "https://farm4.staticflickr.com/3069/2618662727_4603c3a203.jpg"},
	{name: "Mountain", image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg"},
	{name: "Salmon", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
	{name: "Salmon", image: "https://farm4.staticflickr.com/3514/3844623716_427ed81275.jpg"},
	{name: "Granite Hill", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
	{name: "Salmon", image: "https://farm4.staticflickr.com/3069/2618662727_4603c3a203.jpg"},
	{name: "Mountain", image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg"},
	{name: "Salmon", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
	{name: "Salmon", image: "https://farm4.staticflickr.com/3514/3844623716_427ed81275.jpg"},
	{name: "Granite Hill", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
	{name: "Salmon", image: "https://farm4.staticflickr.com/3069/2618662727_4603c3a203.jpg"},
	{name: "Mountain", image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg"},
	{name: "Salmon", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
	];


app.get("/", function(req, res){
	res.render("landing");
})

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	//get data from form to add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground)
	res.redirect("/campgrounds");
	//redirect to campground page
	// return
})

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})

app.listen(3000, function(){
	console.log("Server running!")
})