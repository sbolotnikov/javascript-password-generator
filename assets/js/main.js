// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // GIVEN I need a new, secure password
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// generatePassword function should be below
function generatePassword() {

    var validator = false;
    var passlength = 0;
    // *********************** function logic **********************
    // THEN I am presented with a series of prompts for password criteria
    // ??????? what series
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    // ????? i thought that is a given

    // collected all the data here *************************
    // ************ 1 PROMPT *************
    while (!validator) {
        passlength = parseInt(prompt("Please enter the password length more then 8 and less then 128"));
        if (!isNaN(passlength)) {
            if ((passlength < 8) || (passlength > 128)) {
                alert("Sorry entered number is not in range. Try again");
            }
            else {
                validator = true;
            }
        }
        else {
            alert("Sorry it is not a number. Try again");
        }
    }

    // ************ need validation ***********
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    // we need a prompt here and ask for the length from the user
    // check IF the input number is < 8 and > 128 

    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    // each prompt needs to be validated...
    // in this case, we should probably use a function to turn the length into a number
    var lowcaseChk = false;
    var uppercaseChk = false;
    var numericChk = false;
    var specialChk = false;
    var setOfKeys = "";
    var lowcaseSet = "qwertyuiopasdfghjklzxcvbnm";
    var uppercaseSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var numericSet = "0123456789";
    var specialSet = "!@#$%^&*()-_+{}[ ]";
    var passwordHolder = "";
    var randomsymbolsStr = "";
    var randomePos = 0;


    // ************** 4 confirms **************
    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    // we need a confirm to ask the user if they want to use lowercase
    while ((!lowcaseChk) && (!uppercaseChk) && (!numericChk) && (!specialChk)) {
        alert("Make sure to choose at least 1 set of keys for the password")
        lowcaseChk = confirm("Would you like to use lowercase letters for your password?");
        if (lowcaseChk) {
            setOfKeys = lowcaseSet;
            randomsymbolsStr = GetRandomSymbol(lowcaseSet);
        }
        // we need a confirm to ask the user if they want to use uppercase
        uppercaseChk = confirm("Would you like to use uppercase letters for your password?");
        if (uppercaseChk) {
            setOfKeys = setOfKeys + uppercaseSet;
            randomsymbolsStr = randomsymbolsStr + GetRandomSymbol(uppercaseSet);
        }
        // we need a confirm to ask the user if they want to use numeric
        numericChk = confirm("Would you like to use numeric for your password?");
        if (numericChk) {
            setOfKeys = setOfKeys + numericSet;
            randomsymbolsStr = randomsymbolsStr + GetRandomSymbol(numericSet);
        }
        // we need a confirm to ask the user if they want to use special characters
        specialChk = confirm("Would you like to use special characters for your password?");
        if (specialChk) {
            setOfKeys = setOfKeys + specialSet;
            randomsymbolsStr = randomsymbolsStr + GetRandomSymbol(specialSet);
        }
        // end of "collected all the data here" *************************
        // using the number from above and the 4 booleans
    }
    randomePos = Math.floor(Math.random() * (passlength - randomsymbolsStr.length));
    for (var i = 0; i < passlength - randomsymbolsStr.length; i++) {
        if (i === randomePos) {
            passwordHolder = passwordHolder + randomsymbolsStr;
        }
        passwordHolder = passwordHolder + GetRandomSymbol(setOfKeys);
    }
  
    return passwordHolder;
   
    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // all the information is gathered (all prompts are finished getting input)
    // all the HARD logic goes here ????????

    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page
    // either do an alert with password... or just check to see if my variable has a password

    // *********************** end function logic **********************
}
function GetRandomSymbol(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}




// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
