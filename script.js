// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
// write thecode, ask questions options, save response as variable, return either value entered or truee/false.  write logic off what user has chosen to randomly create to bring back as single string as UserPassword.  JUST MAKE EDITS HERE and that is all.  Pseudocode it out first.


  return UserPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function on passoword buttton that runs it
