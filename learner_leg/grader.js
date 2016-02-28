function average(scores){
	var total = 0;
	// for(var i = 0; i < array.length; i++){
	// 	total = total + array[i];
	// }
	scores.forEach(function(score){
		total += score;
	})
	var avg = total/scores.length;
	return Math.round(avg);
}

console.log("Average score for env science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

console.log("Average score for chemistry");
var scores2 = [40, 98, 89, 100, 100, 86, 94];
console.log(average(scores2));