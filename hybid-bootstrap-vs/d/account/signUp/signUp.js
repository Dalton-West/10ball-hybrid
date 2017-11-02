// Sign Up Document

//get variables
var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var displayName = document.getElementById("displayName");
var email = document.getElementById("userEmail");
var password = document.getElementById("userPassword");
var confirmPassword = document.getElementById("passwordConfirmation");
var registerButton = document.getElementById("regBTN");

registerButton.onclick = function(){
    console.log("The first name is " + fName.value + "The Last Name Is" + lName.value);
    return;
}