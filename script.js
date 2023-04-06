// Assignment Code
var generateBtn = document.querySelector("#generate");


// testing log works, javascript sourced in index correctly
console.log("ding");



// arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ">", "?"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// get criteria for rest of password according to the bootcamp guidelines
function allOptions() {
  var isValid = false;

  var pswdLength = window.prompt("please pick the length of your password, between 8 - 128 characters.");
  var wantLowercase = window.confirm("Do you want to use lower-case letters? (click OK if you do, CANCEL for nope)");
  var wantUppercase = window.confirm("Do you want to use upper-case letters? (click OK if you do, CANCEL for nope)");
  var wantNumbers = window.confirm("Do you want to use numbers? (click OK if you do, CANCEL for nope)");
  var wantCharacters = window.confirm("Do you want to use special characters? (click OK if you do, CANCEL for nope)");


  // check to make sure pswdLength has a value, had issue with this (see commit "fixed generator and allOptions functions").
  console.log(pswdLength);


  // check to make sure one type of character is chosen.
  if (
    wantLowercase === false &&
    wantUppercase === false &&
    wantNumbers === false &&
    wantCharacters === false) {
    window.alert("User must select at least one type of character, please try again.");
    allOptions();
  }
  else if (pswdLength < 8 || pswdLength > 128) {
    window.alert("Required password length is 8 - 128 characters, please try again.");
    // re-run from start if not valid response, so you don't have to click through every option to restart.
    allOptions();
  }
  else if (isNaN(pswdLength)) {
    window.alert("Password length must be a numeric response, please try again.")
    allOptions();
  }
  else {
    isValid = true;

    return { wantLowercase, wantUppercase, wantNumbers, wantCharacters, pswdLength }
  }

}

// function to pull random items from array and add them to var userPassword, according to user choices.
function generatePassword() {
  var answers = allOptions();

  // throw it all in one big array
  var compiledPswd = [];

  // hold random array items in a string for text output
  var userPassword = "";

  // checking to make sure answers has value
  console.log(answers);

  if (answers.wantLowercase) {
    for (var x of lowerCase)
      compiledPswd.push(x);
  }

  if (answers.wantUppercase) {
    for (var x of upperCase)
      compiledPswd.push(x);
  }

  if (answers.wantNumbers) {
    for (var x of numbers)
      compiledPswd.push(x);
  }

  if (answers.wantCharacters) {
    for (var x of characters)
      compiledPswd.push(x);
  }

  // testing pswdLength value
  console.log(answers.pswdLength);

  for (var i = 0; i < answers.pswdLength; i++) {

    // testing genny pulling items
    var test = Math.floor(Math.random() * compiledPswd.length)
    console.log(test);

    userPassword += compiledPswd[Math.floor(Math.random() * compiledPswd.length)];

    // testing userPassword is actually generated
    console.log(userPassword);
  }

  // checking to make sure the genny is still running smoothly
  console.log(compiledPswd);
  console.log(userPassword);

  return userPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);