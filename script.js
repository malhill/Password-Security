
// // GIVEN I need a new, secure password

// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password
alert("Please, select ''Generate Password'' for your password");

//creating the arrays!
let passwordString="";
let caseArray=[];
let lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numericChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria

function generatePassword() {
  let useLowerCase=confirm("Do you want to include lowercase characters?");
  let useUpperCase=confirm("Do you want to include uppercase characters?");
  let useNumeric=confirm("Do you want to include numeric characters?");
  let useSpecial=confirm("Do you want to include special characters?");
  let useLength = parseInt(prompt("How long do you want your password to be?"));

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  if (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    alert("Please select one type of character");
    return;
  }
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  
  if (useLength < 8 || useLength > 128 || isNaN(useLength)) {
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    alert("Please select length 8 or more, but less than 128")
    // check to make sure that line 28 is only a number
    console.log(useLength);
  }
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  caseArray = [];
  if(lowerCaseChar) {
    caseArray = caseArray.concat(lowerCaseChar);
    console.log(caseArray);
  }
  if(upperCaseChar) {
    caseArray = caseArray.concat(upperCaseChar);
    console.log(caseArray);
  }
  if(numericChar) {
    caseArray = caseArray.concat(numericChar);
    console.log(caseArray);
  }
  if(specialChar) {
    caseArray = caseArray.concat(specialChar);
    console.log(specialChar);
  }
  
  passwordString = "";
  for (var i = 0; i < useLength; i++){
    //console.log(caseArray[i]);
    var random = Math.floor(Math.random() * caseArray.length);
    var letter = caseArray[random];
    //console.log(letter);
    passwordString = passwordString + letter;

    //[a comparison to above 'for' statement] learned to add the function before the 'for' function. then utilizing the right function (caseArray > useLength)
    //for (var i=0; i < useLength; i++){
    //var random= Math.floor(Math.random() * useLength.length);
    //console.log(random);
    //}
  }
  //testing if the caseArray is functioning
  //console.log(caseArray.length);
  return passwordString; // exit the function with value - password


  
}

// Assignment Code. Given by homework
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. Given by homework
function writePassword() {
  var passwordString = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordString;
}
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
generateBtn.addEventListener('click', writePassword);


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// testing if all of the code will finish. Will utilize this more in my own code!
//console.log("peter");


//Homework Criteria:
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page