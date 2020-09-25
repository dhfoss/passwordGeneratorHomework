function generatePassword() {
    
    //1. All variables for the function
    var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    var passwordLength = 0;
    var includeLowerCase = false;
    var includeUpperCase = false;
    var includeNumbers = false;
    var includeSpecialCharacters = false;
    var possiblePasswordCharacters = [];
    var guaranteedPasswordCharacters = 0;
    var password = [];
    var shuffledPassword = [];
    var passwordString = [];

    //2. This section asks the user for a password length. It does not let the user continue if they enter in an invalid length, or if they enter in an invalid character.
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      passwordLength = parseInt(prompt("Enter in a number from 8-128"), 10);
    }

    //3. This section asks for which kind of characters to include in the password. It prevents the user from advancing if they say no to all characters.
    while (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
      includeLowerCase = confirm("Do you want lower case letters in your password? (Click 'OK' for yes, and 'cancel' for no");
      includeUpperCase = confirm("Do you want upper case letters in your password? (Click 'OK' for yes, and 'cancel' for no");
      includeNumbers = confirm("Do you want numbers in your password? (Click 'OK' for yes, and 'cancel' for no")
      includeSpecialCharacters = confirm("Do you want special characters in your password? (Click 'OK' for yes, and 'cancel' for no");
      if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
          alert("Your password must include characters. Answer yes to at least one of the following questions");
      }
    }

    //4. This section gets all the possible characters that can be included in the password based on the prompts.
    if (includeLowerCase) {
      for (var i = 0; i < lowerCases.length; i++) {
        possiblePasswordCharacters.push(lowerCases[i]);
      }
    }
    if (includeUpperCase) {
      for (var i = 0; i < upperCases.length; i++) {
        possiblePasswordCharacters.push(upperCases[i]);
      }
    }
    if (includeNumbers) {
      for (var i = 0; i < numbers.length; i++) {
        possiblePasswordCharacters.push(numbers[i]);
      }
    }
    if (includeSpecialCharacters) {
      for (var i = 0; i < specialCharacters.length; i++) {
        possiblePasswordCharacters.push(specialCharacters[i]);
      }
    }

    //5. If the user answered yes to any of the prompts, the next section makes sure to include one of each type of character they selected.
    if (includeLowerCase) {
        password.push(lowerCases[Math.floor(Math.random() * lowerCases.length)]);
        guaranteedPasswordCharacters = guaranteedPasswordCharacters + 1;
    }
    if (includeUpperCase) {
        password.push(upperCases[Math.floor(Math.random() * upperCases.length)]);
        guaranteedPasswordCharacters = guaranteedPasswordCharacters + 1;
    }
    if (includeNumbers) {
        password.push(numbers[Math.floor(Math.random() * numbers.length)]);
        guaranteedPasswordCharacters = guaranteedPasswordCharacters + 1;
    }
    if (includeSpecialCharacters) {
        password.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        guaranteedPasswordCharacters = guaranteedPasswordCharacters + 1;
    }

    //6. This section gets the rest of the password characters, drawn from an array of all possible characters
    for (var i = 0; i < passwordLength - guaranteedPasswordCharacters; i++) {
        password.push(possiblePasswordCharacters[Math.floor(Math.random() * possiblePasswordCharacters.length)]);
    }

    //7. This section takes the current password array and randomizes the order. This ensures that passwords do not always start with the guarenteed characters generated from lines 39-55.
    while (password.length > 0) {
        var r = Math.floor(Math.random() * password.length);
        shuffledPassword.push(password[r]);
        password.splice(r,1);
    }

    //8. This section takes the shuffled password array and turns it into a string.
    for (var i = 0; i < shuffledPassword.length; i++) {
        passwordString = passwordString + shuffledPassword[i];
    }

    return passwordString;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);