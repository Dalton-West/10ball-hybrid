//Sign Up User With Firebase
//Global Variables
//Form Element 
var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var displayName = document.getElementById("displayName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
//var confirmPassword = document.getElementById("confirmPassword");
//Get the SignUp button
var regBtn = document.getElementById("regBTN");
//Get Facebook Button
var fbRegBtn = document.getElementById("fbBtn");
//Get Google Button
var googleBtn = document.getElementById("googleBtn");
//Get the form id
//var regForm = document.querySelector("#registerForm");


//Validation Events
fName.addEventListener("blur", fNameVerify, true);
lName.addEventListener("blur", lNameVerify, true);
displayName.addEventListener("blur", displayNameVerify, true);
userEmail.addEventListener("blur", userEmailVerify, true);
userPassword.addEventListener("blur", userPasswordVerify, true);

// Add event listeners to buttons
regBtn.addEventListener("click", signUpEmail);
fbRegBtn.addEventListener("click", signUpFacebook);
googleBtn.addEventListener("click", signUpGoogle);

//SignUp users with email
	function signUpEmail(){
		//Prevent form from refreshing on submit
		//regForm.addEventListener("submit", function(event){event.preventDefault();});
		// Error Check Form
		if(fName.value === ""){
			fName.style.border = "1px solid red";
			setError("fName", "Please enter your first name!");
			fName.focus();
			//console.log("You did not submit a first name so this error popped up!");
			return false;
		}
		if(lName.value === ""){
			lName.style.border = "1px solid red";
			setError("lName", "Please enter your last name!");
			lName.focus();
			//console.log("You did not submit a last name so this error popped up!");
			return false;
		}
		if(displayName.value < 4){
			displayName.style.border = "1px solid red";
			setError("displayName", "Display name must be at least 4 characters long!");
			displayName.focus();
			//console.log("Your display name was shorter than 4 characters long!");
			return false;
		}
		if(userEmail.value === ""){
			userEmail.style.border = "1px solid red";
			setError("userEmail", "Please enter your email address!");
			//console.log("You did not submit an email!");
			userEmail.focus();
			return false;
		}
		if((userPassword.value === "") || (userPassword.value < 4)){
			userPassword.style.border = "1px solid red";
			setError("userPassword", "Please enter a password of at least 4 characters!");
			userPassword.focus();
			//console.log("This is a password error. Either you didn't submit a password or it was less than 4 characters!");
			return false;
		}
		/*if(userPassword.value != confirmPassword.value){
			userPassword.style.border = "1px solid red";
			confirmPassword.style.border = "1px solid red";
			setError("userPassword", "The two passwords do not match!");
			userPassword.focus();
			return false;
		}*/
		
		//Done Error Checking
		//Create a variable objet from all the form data
		var userData = {
			firstName: fName.value,
			lastName: lName.value,
			emailAddress: userEmail.value,
			userDisplayName: displayName.value,
			dateFirstSeen: Date()
		};
		fBaseCreateUser();
		updateDataBase();
		
}
//firebase create user with email and password
function fBaseCreateUser(){
	var email = userEmail.value;
	var password = userPassword.value;
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
		//check if user is signed in or not
		var user = firbase.auth().currentUser;
		var name, email, photoUrl, uid, emailVerified;
		/* firebase.auth().onAuthStateChanged(function(user){
			if(user != null){
				//User Is signed in
				name = user.displayName;
				email = user.email;
				photoUrl = user.photoUrl;
				emailVerified = user.emailVerified;
				uid = user.uid;
			} else {
				//No user is signed in
			}
		}) */
		//Update the users profile
		user.updateProfile({
			displayName: userData.displayName,
			photoURL: null,

		}).then(function(){
			//Update Successful
			console.log("The users display name has been set with firebase.");
		}).catch(function(){
			//an error occured
			console.log("There was a error seting the users displayName");
		})
	}).then(function(){
		//Send a verification email
		user.sendEmailVerification().then(function(){
			//Email Sent
			console.log("Verifcation email was sent!");
		}).catch(function(){
			//An error happened
			console.log("There was an error sending the user the verifcation email.")
		})
	})
}

//firestore data put
function firestoreUserData() {
	
}

//Form Validation Functions Clear errors if events are true
//firstName
function fNameVerify(){
	if(fName.value !== ""){
		fName.style.border = "1px solid green";
		setError("fName", "");
		return true;
	}
}
//lastName
function lNameVerify(){
	if(lName.value !== ""){
		lName.style.border = "1px solid green";
		setError("lName", "");
		return true;
	}
}
function displayNameVerify(){
	if(displayName.value > 4){
		displayName.style.border = "1px solid green";
		setError("displayName", "");
		return true;
	}
}
function userEmailVerify(){
	if(userEmail.value !== ""){
		userEmail.style.border = "1px solid green";
		setError("userEmail", "");
		return true;
	}
}
function userPasswordVerify(){
	if(userPassword.value !== ""){
		userPassword.style.border = "1px solid green";
		setError("userPassword", "");
		return true;
	}
}

//SignUp users with Facebook
	function signUpFacebook(){
		
	}
//SignUp users with Google
	function signUpGoogle(){
		
	}

//setErrors For Signup form
function setError(id, message){
	document.getElementById(id + "-error").innerHTML = message;
}