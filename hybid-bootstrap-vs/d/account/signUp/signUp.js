// Sign Up Document

//get variables
var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var displayName = document.getElementById("displayName");
var email = document.getElementById("userEmail");
var password = document.getElementById("userPassword");
var confirmPassword = document.getElementById("passwordConfirmation");
var registerButton = document.getElementById("regBTN");

registerButton.addEventListener("click", function(){
   var regFormData = [
        fName = fName.value,
        lName = lName.value,
        displayName = displayName.value,
        email = email.value,
        password = password.value  
    ];
    console.log("I will save" + regFormData + "to the firebase server");
});