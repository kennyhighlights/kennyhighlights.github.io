// Mongoose Demo Document

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String,
});

var Cat = mongoose.model("Cat", catSchema);

//add new cat to db
		// var george = new Cat({
		// 	name: "Mrs. Norris",
		// 	age: 121,
		// 	temperament: "Evil"
		// });

		// george.save(function(err, cat){
		// if(err){
		// 	console.log("SOMETHING WENT WRONG")
		// } else {
		// 	console.log(cat)
		// }
		// });

	Cat.create({
			name: "Snow White",
			age: 15,
			temperament: "Bland"}, function(err, cat){
			if(err){
				console.log(err);
			} else {
				console.log(cat);
			}
		});

//retrieve all cats from db
		Cat.find({}, function(err, cats){
		if(err){
			console.log(err);
		} else {
			console.log("ALL cats");
			console.log(cats);
		}
		})