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


//Firebase Auth Variable
var auth = firebase.auth();
//Current User
//Firestore Variable db
var db = firebase.firestore();
//Firestore References
var addUser = db.collection("users");

//SignUp users with email
	function signUpEmail(){
		//Prevent form from refreshing on submit
		//regForm.addEventListener("submit", function(event){event.preventDefault();});
		formValidationErrors();
		 
		 /*.then(function(){
			//Add The data to a database 
			addUser.doc().set(userData).then(function() {
				console.log("Document successfully written!");
			});
	});*/
	// Check to see if user is not null
	checkUserNotNull();
	// Declarte Data for database
		var userData = {
			firstName: fName.value,
			lastName: lName.value,
			displayName: displayName.value,
			email: userEmail.value,
			userCreated: Date(),
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		};
		//Push to database firestore
		console.log(userData);
		console.log("The dataObject firstName is " + userData.firstName);
	}

	function formValidationErrors(){
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
	}
	function firebaseCreateUser(){
		//Create a user account
		var email = userEmail.value;
		var password = userPassword.value;
		//create user
		 auth.createUserWithEmailAndPassword(email, password);
	}
	function checkUserNotNull(){
		var user = firebase.auth().currentUser;
		var name, email, photoUrl, uid, emailVerified;
		
		if (user != null) {
		  // User is signed in.
		  name = user.displayName;
		  email = user.email;
		  photoUrl = user.photoURL;
		  emailVerified = user.emailVerified;
		  uid = user.uid;
		  console.log(user, "/b User Info");
		} else {
		  // No user is signed in.
		  console.log(user, "/b No User");
		}
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
	if(displayName.value >= 4 || displayName != ""){
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
