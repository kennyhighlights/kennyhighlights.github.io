var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp_2");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
})

var Campground = mongoose.model("Campground", campgroundSchema);

				Campground.create({
					name: "Salmon",
					image: "https://farm4.staticflickr.com/3514/3844623716_427ed81275.jpg",
					description: "Something something"
				}, function(err, campground){
					if(err){
						console.log(err);
				} else {
					console.log("NEWLY CREATED CAMPGROUND!");
					console.log(campground);
				}
				})



	app.get("/", function(req, res){
		res.render("landing");
	})

//INDEX ROUTE - show all campgrounds
app.get("/campgrounds", function(req, res){
	//get all campground from db
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("index", {campgrounds: allCampgrounds})
		}
	})
});

//CREATE ROUTE - add new campground to DB
app.post("/campgrounds", function(req, res){
	//get data from form to add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
	//create a new campground and save to database
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});
})

//NEW - Show form to create nwe campground
app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})


app.get("/campgrounds/:id", function(req, res){
	//find campground with provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else{
			res.render("show", {campground: foundCampground});
		}
	});

	// render show templete with that campground
})

app.listen(3000, function(){
	console.log("Server running!")
})