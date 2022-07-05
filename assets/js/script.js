// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = false;
var uppercase = false;
var numeric = false;
var specialChar = false;
var arrPass= [];
var long = 0;

//generate the password once inputs are validate
function generatePassword() {
  
  if (validate()) {
    var password = createPass();
    for (var i = 0; i < long; i++) {    
      password = password.concat(arrPass[(Math.floor(Math.random() * arrPass.length))]);
    } 
    return(password);
  } else {
    return("Your Secure Password");
  }
  

}

//create the array with user preferences and it makes sure that contains 
//at least one of a kind character selected by the user
function createPass() {
  var lowArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var spcArr = ["!", "#", "$", "%", "&", "/", "(", ")", "+", "*", "-", "@"];
  var start  = "";

  if (lowercase) {
    arrPass = arrPass.concat(lowArr);
    start = start.concat(lowArr[(Math.floor(Math.random() * lowArr.length))]);
    long--;
  } 
  if (uppercase) {
    arrPass = arrPass.concat(upArr);
    start = start.concat(upArr[(Math.floor(Math.random() * upArr.length))]);      
    long--;
  }
  if (numeric) {
    arrPass = arrPass.concat(numArr);
    start = start.concat(numArr[(Math.floor(Math.random() * numArr.length))]);
    long--;
  }
  if (specialChar) {
    arrPass = arrPass.concat(spcArr);
    start = start.concat(spcArr[(Math.floor(Math.random() * spcArr.length))]);
    long--;
  }
  return start;
  
}

//validate user input
function validate() {  
  lowercase = confirm("Do you want to include lowercase?");
  uppercase = confirm("Do you want to include uppercase?");
  numeric = confirm("Do you want to include numbers?");
  specialChar =  confirm("Do you want to include special characters?");
  long = prompt("Choose the length for your password (from 8 to 128 characters)", "8");
  
  if (!lowercase && !uppercase && !numeric && !specialChar) {
    alert("You have to select at least one type. Please try again");
    return false;
  } else {
    if (long >= 8 && long <=128) {
      return true;
    }else {
      alert("The lenght is out of range. Please try again");
      return false;
    }
  }  
}

// Write password to the #password input
function writePassword() {
  lowercase = false;
  uppercase = false;
  numeric = false;
  specialChar = false;
  arrPass= [];
  long = 0;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
