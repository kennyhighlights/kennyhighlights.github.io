function isEven(number) {
	// if(number % 2 === 0) {
	// 	return true
	// }
	// else {
	// 	return false
	// }
	return number % 2 === 0;
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);


function factorial(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i
	}
	return result
}


function fact(num) {
	var result = num;
	if(num === 0) {
		return 1;
	}
	for (var i = num - 1; i >= 1; i--) {
		result *= i
	}
	return result
}



// function factor(a) {
// 	var b = 0
// 	if(a > 0) {
// 	loop while(a > 0) {
// 	b = b + a * (a - 1)
// 	a = a - 1
// }
// }
// else if a = 0 {
// 	b = 1
// }
// return(b)
// }


factorial(5);
factorial(2);
factorial(10);
factorial(0);



function kebabToSnake(argu) {
	//replace all dashes with underscores
// argu.replace("-","_")
var newStr = argu.replace(/-/g, "_")
//return argu
return newStr
}

kebabToSnake("hello-world")
