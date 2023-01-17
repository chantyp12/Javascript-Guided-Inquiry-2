/*   
     Create a program that accepts a 
     number (1-12) as input and logs 
     to the console that number and 
     its corresponding month. For 
     example: if the user enters the 
     number 3, then it should return 
     the month “March.” Alert the user 
     if they enter an invalid number 
     (e.g. less than 1 or greater than 12).
*/

// Set up Array
var months = [
  "January",        //<--- Remember... array indexes start at 0, so 0 = January
  "February",       //<--- 1 = February
  "March",          //<--- 2 = March
  "April",          //<--- etc...
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getMonth() {
  // Set up boolean value for while loop
  var validInput = false; //<--- Assume the user will never enter a valid value
  // Set up while loop
  while (!validInput) { //<--- As long validInput is false, this loop will repeat
    // Set up output string
    var str = "";
    // Set up input variable
    var inputNum = prompt("What month do you want? \n(Enter 1-12)");
    
    // Check if input variable is valid
    if (0 < inputNum && inputNum < 13) { //<--- Check if inputNum is greater than zero AND less than 13
      // If it is valid, set validInput to true and the loop will not run again
      validInput = true;
    }
    // Set up Switch-Case statement
    switch (inputNum - 1) { //<--- User can enter 1-12, but array indexes start at 0, so subtract 1 from input
      case 0:
        str += months[0];
        break;
      case 1:
        str += months[1];
        break;
      case 2:
        str += months[2];
        break;
      case 3:
        str += months[3];
        break;
      case 4:
        str += months[4];
        break;
      case 5:
        str += months[5];
        break;
      case 6:
        str += months[6];
        break;
      case 7:
        str += months[7];
        break;
      case 8:
        str += months[8];
        break;
      case 9:
        str += months[9];
        break;
      case 10:
        str += months[10];
        break;
      case 11:
        str += months[12];
        break;
      default:
        alert("You have entered an invalid number. Try again.\n");
        break;
    }
  }
  // Return the output string as an alert
  return alert(str);
}
// Log greeting
console.log(getMonth());