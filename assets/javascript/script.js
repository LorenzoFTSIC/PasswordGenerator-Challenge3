// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCriteria = "qwertyuiopasdfghjklzxcvbnm"
var uppercaseCriteria = "QWERTYUIOPASDFGHJKLZXCVBNM"
var numericalCriteria = "1234567890"
var symbolCriteria = "`~!@#$%^&*()-_=+[{]};:',/?.>,<]`"
var passwordCriteria = ""
var passwordLength = 0
var generatedPassword = ""




function numericalCheck() {
  // get user input
  var lengthPassGen = prompt("Please enter your the length of the password, from 8 to 128 characters.");

  // Check if user input is in parameters
  if (lengthPassGen >= 8 && lengthPassGen <= 128) {
    return lengthPassGen
    
  } else {
    console.log("Please enter a number from 8-128.")
  }
}

function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random());

  // get random item
  const item = arr[randomIndex];

  return item;
}

// returns lowercase true/false check
function lowercaseCheck () {
  var lowercaseGen = confirm("Do you want lowercase letters included in this passowrd?")
  return lowercaseGen
}

// returns uppercase true/false check
function uppercaseCheck () {
  var uppercaseGen = confirm("Do you want uppercase letters included in this passowrd?")
  return uppercaseGen
}

// returns symbolic true/false check
function symbolCheck() {
  var symbolGen = confirm("Do you want symbols included in this password?")
  return symbolGen
}

function generatePassword() {

  //Ask user for password criteria

  numericalGen = numericalCheck()
  parseInt(numericalGen.value)

  if (uppercaseCheck() === true) {
    var uppercaseArray = uppercaseCriteria.split()
    passwordCriteria = passwordCriteria.concat(uppercaseArray) 
  }

  if (lowercaseCheck()) {
    var lowercaseArray = lowercaseCriteria.split()
    passwordCriteria = passwordCriteria.concat(lowercaseArray)
  }

  if (symbolCheck()) {
    var symbolArray = symbolCriteria.split()
    passwordCriteria = passwordCriteria.concat(symbolArray)
  }

  for (i in numericalGen) {
    generatedPassword +=  getRandomItem(passwordCriteria)
    var test = 0
    test++;
    console.log("test")
  }
  console.log(generatedPassword)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


