var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/blog");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
	console.log("Running!")
})


// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema)

// Blog.create({
// 	title: "Dog",
// 	image: "https://assets.servedby-buysellads.com/p/manage/asset/id/26625",
// 	body: "Demo demo demmo."
// })

// RESTFUL ROUTES


app.get("/", function(req, res){
	res.redirect("/blogs");
})

//NEW ROUTE
app.get("/blogs/new", function(req, res){
	res.render("new");
})



//CREATE ROUTE

app.post("/blogs", function(req, res){
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		} else {
			res.redirect("/blogs");
		}
	})
})


app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		} else {
			res.render("show", {blog: foundBlog});
		}
	})
});



app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if (err){
			console.log(err);
		} else {
			res.render("index", {blogs: blogs});
		}
	})
})
