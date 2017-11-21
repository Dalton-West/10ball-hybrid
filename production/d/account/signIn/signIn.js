//Login A User
//Buttons
var btnLogin = document.getElementById("logInBtn");
var btnForgotPass = document.getElementById("_forgotPwd");
// Get Form Fields
var email = document.getElementById("loginEmail");
var password = document.getElementById("loginPassword");
var btnFB = document.getElementById("logInFacebook");
//Get Google Button
var btnGoogle = document.getElementById("logInGoogle");

// Onclick Events
btnLogin.addEventListener("click", logInEmail, false);
btnForgotPass.addEventListener("click", goToForgotPassword, false);
btnFB.addEventListener("click", logInFacebook, false);
btnGoogle.addEventListener("click", logInGoogle, false);

//Login Function
function logInEmail(){
var eMail = email.value;
var passWord = password.value;
var auth = firebase.auth();

auth.signInWithEmailAndPassword(eMail, passWord).then(function (){
})

}

//Forgot Password Onclick
function goToForgotPassword(){
	console.log("changing page")
	//Redirect When Password is reset
	location.href = "forgot_Password.html";
}

//Login Facebook Function
function logInFacebook(){

	console.log("This button for facebook was clicked!");
	
}
//Login Google Function
function logInGoogle(){

	console.log("This button for google was clicked!");
	
}
