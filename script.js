
// // GIVEN I need a new, secure password

// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password
alert("Please, select ''Generate Password'' for your password");

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

  if (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
    alert("Please select one type of character");
  return;
  }
  // check to make sure that line 28 is only a number
  if (useLength < 8 || useLength > 128 || isNaN(useLength)) {
    alert("Please select length 8 or more, but less than 128")
  return;
  }

  if(lowerCaseChar) {
    caseArray.concat(lowerCaseChar);
    console.log(caseArray);
  }
  if(upperCaseChar) {
    caseArray.concat(upperCaseChar);
    console.log(caseArray);
  }
  if(numericChar) {
    caseArray.concat(numericChar);
    console.log(caseArray);
  }
  if(specialChar) {
    caseArray.concat(specialChar);
    console.log(caseArray);
  }

  for (var i=0; i < useLength; i++){
    var random= Math.floor(Math.random() * passwordString.length);
    console.log(generatePassword);
  
  }

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener('click', writePassword);



function UserInput(ps) {
  document.getElementById("password").textContent = ps;
  console.log(password);
}

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