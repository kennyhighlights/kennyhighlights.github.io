var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

// Schema Setup
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create({
	name:"Mountain",
	image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg"
}, function(err, campground){
	if(err){
		console.log(err)
	} else {
		console.log(campground)
	}
}
	)



app.get("/", function(req, res){
	res.render("landing");
})

app.get("/campgrounds", function(req, res){
	//get all campgrounds from DB
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		} else{
			res.render("campgrounds", {campgrounds: allcampgrounds});
		}
	});
});

app.post("/campgrounds", function(req, res){
	//get data from form to add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	//create a new campground and save to DB
	Campground.create(newCampground, functon(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});

	//redirect to campground page
	// return
})

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})

app.listen(3000, function(){
	console.log("Server running!")
})