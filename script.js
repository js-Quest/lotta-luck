// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ">", "?"];
var numbers = [0,1,2,3,4,5,6,7,8,9];


// function for password length
function length() {
  var pswdLength = window.prompt("please pick the length of your password, between 8 - 128 characters.");

  // check length-of-password requirement met
  if (pswdLength < 8 || pswdLength > 128) {
    window.alert("Required password length is 8 - 128 characters, please try again.");
    return length();
  }

  if (Number.isNaN(pswdLength)) {
    window.alert("Password length must be a numeric response")
    return length();
  }
}

 // get criteria for rest of password according to the bootcamp guidelines
function allOptions() {
  var isValid = false;

  var wantLowercase = window.confirm("Do you want to use lower-case letters? (click OK if you do, CANCEL for nope)");
  var wantUppercase = window.confirm("Do you want to use upper-case letters? (click OK if you do, CANCEL for nope)");
  var wantNumbers = window.confirm("Do you want to use numbers? (click OK if you do, CANCEL for nope)");
  var wantCharacters = window.confirm("Do you want to use special characters? (click OK if you do, CANCEL for nope)");

  // check to make sure one type of character is chosen
  if (
    wantLowercase === false &&
    wantUppercase === false &&
    wantNumbers === false &&
    wantCharacters === false)
    window.alert("must select at least one type of character");
  else
    isValid = true;
}

// randomly generate characters for password
function generatePassword() {


  // return UserPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function on password button that runs it


writePassword()

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

