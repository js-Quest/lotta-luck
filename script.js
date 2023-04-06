// Assignment Code
var generateBtn = document.querySelector("#generate");



console.log("ding");
  


// variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ">", "?"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];


// get criteria for rest of password according to the bootcamp guidelines
function allOptions() {
  var isValid = false;
  
  var pswdLength = window.prompt("please pick the length of your password, between 8 - 128 characters.");
  var wantLowercase = window.confirm("Do you want to use lower-case letters? (click OK if you do, CANCEL for nope)");
  var wantUppercase = window.confirm("Do you want to use upper-case letters? (click OK if you do, CANCEL for nope)");
  var wantNumbers = window.confirm("Do you want to use numbers? (click OK if you do, CANCEL for nope)");
  var wantCharacters = window.confirm("Do you want to use special characters? (click OK if you do, CANCEL for nope)");
  console.log(pswdLength);
  // check to make sure one type of character is chosen
  if (
    wantLowercase === false &&
    wantUppercase === false &&
    wantNumbers === false &&
    wantCharacters === false) {
    window.alert("User must select at least one type of character, please try again.");
    allOptions();
  }
  else if(pswdLength < 8 || pswdLength > 128) {
    window.alert("Required password length is 8 - 128 characters, please try again.");
    allOptions();
  }
  else if (isNaN(pswdLength)) {
    window.alert("Password length must be a numeric response, please try again.")
    allOptions();
  }
  else {
    isValid = true;
  
  return {wantLowercase, wantUppercase, wantNumbers, wantCharacters, pswdLength}
  }

}

// pull random items from arrays and compile them according to user choices
function generatePassword() {
  var answers = allOptions();
  var compiledPswd = [];
  var userPassword = "";
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
  console.log(answers.pswdLength);
  for (var i = 0; i < answers.pswdLength; i++) {
    var test = Math.floor(Math.random() * compiledPswd.length)
    console.log(test);
    userPassword += compiledPswd[Math.floor(Math.random() * compiledPswd.length)];
    console.log(userPassword);
  }
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

// function on password button that runs it


// Need the following variables:
    // !selected length of the password
    // !array of lowercase letters
    // !array of uppercase letters
    // !array of numbers
    // !array of special characters
    // !to hold the password we're building
    // !possibly the mega-array

  // !prompt for password length --> stored in a variable
  // !Validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then they're going to need to restart OR call the function that prompts for length again
  // !prompt --> Do they want uppercase letters?
  // !prompt --> Do they want lowercase letters?
  // !prompt --> Do they want numbers?
  // !prompt --> Do they want special characters?
  // !Validate that the user has chosen at least one character set --> if not, either have them start over OR recursively call the function that prompts for the character sets
  // !With each of those prompts, you need an array of those character types
    // !There needs to be at least one of each selected character type included in the password
    // Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)
    // for loop:
      // for (var i = password.length - 1; i < passwordLength; i++)
    // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
      // IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
      // IF pushing to a mega-array randomly generate a number to pull a character from the array
      // IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
  // return the generated password

