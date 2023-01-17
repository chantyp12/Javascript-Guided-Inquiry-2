
// Set up number variables
var theNumberOne = 1234;
var theNumberTwo = 4321;


// Set up min() function
function min(num1, num2) {


  // Check if num1 is bigger than num2
  if (num1 > num2) {
    // If num1 is bigger, return num2
    return num2;
  } else {
    // If num2 is bigger, return num1
    return num1;
  }
}


// Log Result of min() function
console.log(min(theNumberOne, theNumberTwo));