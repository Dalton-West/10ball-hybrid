//Send Reset Email to User

//Forgot Password Section
var resetEmail = document.getElementById("resetEmail");
var btnResetPassword = document.getElementById("resetBTN");

//Onclick Send Reset
btnResetPassword.addEventListener("click", sendResetEmail);

function sendResetEmail(){
	var emailAddress = resetEmail.value;
	//Send the reset email
	firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
		// Email sent.
		console.log("reset email sent")
	}).catch(function(error) {
		// An error happened.
	});
}