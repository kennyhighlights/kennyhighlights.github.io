var faker = require("faker");

for (i=0; i<10; i++) {

var randomName = faker.commerce.productName(); // Rowan Nikolaus
var randomPrice = faker.commerce.price(); // Rowan Nikolaus
console.log(randomName + " - $" + randomPrice)
	
}