// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
   //above is the stock code------------------------------------

   

  

 




 //My Work ----------------------------------------


 //-------------------------------------------------------------------------------
 //Here we ask the user the criteria they want for the random password
 
  
  
 var charCount = prompt("Please select the number of characters for your password")
 //Loop to ensure user input matches criteria
   while (charCount < 8 || charCount > 128) {
     alert ("Please select a number between 8 and 128");
     var charCount = prompt("Please select the number of characters for your password")
   }

   var charNum = confirm("Do you want numbers?")
   var charSpe = confirm("Do you want special characters?")
   var charLow = confirm("Do you want lowercase letters?")
   var charUp = confirm ("Do you want uppercase letters?")
   



function generatePassword() {

   var numBank = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   var speBank = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "=", "<", ">", "/", ",", "."]
   var lowBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
   var upBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    function numBankRan() {
    return numBank[Math.floor(Math.random() * numBank.length)]
  }
 
  function speBankRan() {
    return speBank[Math.floor(Math.random() * speBank.length)]
  }

  function lowBankRan() {
    return lowBank[Math.floor(Math.random() * numBank.length)]
  }

function  upBankRan() {
    return upBank[Math.floor(Math.random() * upBank.length)]
  }


  var bigBank = [numBankRan(), speBankRan(), lowBankRan(), upBankRan()]

  //Here is where my if/else would be.. if i could get it to work ToT 
  if (charNum && charSpe && charLow && charUp) {
     for (var i = 0; i < charCount; i++) {
  password += bigBank[Math.floor(Math.random() * bigBank.length)]();
   
   
   
     }
    
    }
  console.log(password)
  console.log(passwordText)
 //---------------------------------------------------------------------------
 
 
 
//   function numBankRan() {
//     return numBank[(Math.floor(Math.random() * numBank.length))]
//   }
 
//   function speBankRan() {
//     return speBank[(Math.floor(Math.random() * speBank.length))]
//   }

//   function lowBankRan() {
//     return lowBank[(Math.floor(Math.random() * numBank.length))]
//   }

// function  upBankRan() {
//     return upBank[(Math.floor(Math.random() * upBank.length))]
//   }
  }
 

}


  
    



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);