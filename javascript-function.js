// Problem - 1 - Define a function called sum that takes two numbers as arguments and returns their sum.
function sum(x, y) {
	return x + y;
}
console.log(sum(3, 4));

// 2 - Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
function isEqual(x, y) {
	if (x === y) {
	return true;
}
	else if(x !== y) {
	return false;
}
}
console.log(isEqual(3, 3));

// 3 - Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
// var x = Original amount in dollars
// var y = discount amount

function discountPercentage(x, y) {
	return (y/x) * 100;

}
console.log(discountPercentage(100, 50));


// 4 - Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual work is separated by only one space.

var string = "";
function stringCapitalize(string) {
	string = "hello world";
	return string.charAt(0).toUpperCase() + string.slice(1);

}
console.log(stringCapitalize(string));

// // 5 - Define a function called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.
function evenNumbers(num) {
	if (num > 100 || num < 0) {
		return "Error";				
}

var even = [];
  for (var i = 0; i <= num; i++) {
    if (i%2 === 0) {
      even.push(i);
    }
  }
  return even;
}
console.log(evenNumbers(77));


// 6 - Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible(num1, num2) {
	if (num1 % num2 === 0) {
		return true;	
	} else {
		return false;
	}	
}
console.log(isDivisible(9, 5));























