/*   
     Given the information below for Tom and Jerry. 
     Tom - height:  9in   mass: 8 g
     Jerry - height: 10in mass: 45 g
     Compare the BMI (Body Mass Index) of Tom & Jerry 
     using a standard BMI formula:
     Store Tom & Jerry’s mass and height as variables.
     Calculate both their BMI’s. 
     Create a Boolean variable containing information 
     about whether Tom has a higher BMI than Jerry.
     Print a string to the console with the variable 
     from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/

// IMPERIAL SYSTEM BMI FORMULA
// In the prompt, Tom & Jerry's height are in inches and grams
// For the imperial system, inches is PERFECT, but grams are a metric unit :(
// So we will need to convert grams to pounds
// We can either do the conversion when initializing the variable, or in the
// BMI formula
// In the example, I'll do the conversion on the variable
// Set up BMI calculation function

function getBMI(w, h) {
  // BMI = weight (lbs) / (height (inches) ^ 2) * 703
  // Get raw BMI calculation
  var bmi = (w / h ** 2) * 703;
  // Round to two decimal places
  var bmiRounded = Math.round(bmi * 100) / 100;
  // Return rounded variable
  return bmiRounded;
  // ^ The above code can be done all in one line:
  // return Math.round((w / h ** 2) * 703 * 100) / 100;
}

// Set up Tom values
var tomName = "Tom";
var tomWeight = 8 * 0.022; // <--- Pound = gram * .022
var tomHeight = 9;
var tomBMI = getBMI(tomWeight, tomHeight);

// Set up Jerry values
var jerryName = "Jerry";
var jerryWeight = 45 * 0.022; // <--- Pound = gram * .022
var jerryHeight = 10;
var jerryBMI = getBMI(jerryWeight, jerryHeight);

// Set up boolean variable
var boolVar = tomBMI > jerryBMI;

// Set up output string
var str = "Is Tom's BMI higher than Jerry's?\n" + boolVar;

// Log output
console.log(str);