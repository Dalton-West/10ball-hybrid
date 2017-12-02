// JavaScript Copyright Damnuel Coleman West for 10ball.org
//Initialize Firbase
  /* var config = {
    apiKey: "AIzaSyCD1dJiTpIv0MygHTH5J97FHVl6QnMZNFk",
    authDomain: "ball-6af20.firebaseapp.com",
    databaseURL: "https://ball-6af20.firebaseio.com",
    projectId: "ball-6af20",
    storageBucket: "ball-6af20.appspot.com",
    messagingSenderId: "48314393073"
  };
  firebase.initializeApp(config);*/

  var config = {
    apiKey: "AIzaSyCI9pwK1-MQNFT5Ly0qD77YnQRSfSwn-C4",
    authDomain: "daltons-west-test.firebaseapp.com",
    databaseURL: "https://daltons-west-test.firebaseio.com",
    projectId: "daltons-west-test",
    storageBucket: "daltons-west-test.appspot.com",
    messagingSenderId: "437989763197"
  };
  firebase.initializeApp(config);

//Firebase Componets
const auth = firebase.auth();
const db = firebase.firestore();
const CURRENTUSER = firebase.User;

//login logout buttons
var logInBtn = document.getElementById("logIn");
var logOutBtn = document.getElementById("logOut");
var userProfileBtnMainNav = document.querySelector("#userProfile");
//Onload Hide Nav
document.addEventListener('DOMContentLoaded', function() {
  userProfileBtnMainNav.classList.add("d-none");}
, false)
//Realtime authentication listener
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var firebaseUserDataAuth = {
      firebaseDisplayName : user.displayName,
      firebaseUserEmail : user.email,
      firebaseUserEmailVerified : user.emailVerified,
      avatarURL : user.photoURL,
      isAnonymous : user.isAnonymous,
      uid : user.uid,
      providerData : user.providerData
  }
  localStorage.setItem("firebase_user_data",  JSON.stringify(firebaseUserDataAuth));
    if (emailVerified == false){
      //alert("Attention " + email + "! Please check your email! For the verifcation message!");
      var emailVerifiedError = document.createElement("p"); 
      var verifiedFalseError = document.createTextNode("Error : " + "Attention " + email + "! Please check your email! For the verifcation message!"); 
      emailVerifiedError.appendChild(verifiedFalseError); //add the text node to the newly created element.
      emailVerifiedError.setAttribute("style", "background-color: red; color: snow;");
      emailVerifiedError.classList.add("text-center");
      document.querySelector("#header").appendChild(emailVerifiedError);

    }else {
      
    }
    // [START_EXCLUDE]
	  //console.log("A user is signed in See Below");
	  console.log(user);
    logOutBtn.classList.remove("d-none");
    logInBtn.classList.add("d-none");
    userProfileBtnMainNav.classList.remove("d-none");
    // [END_EXCLUDE]
    return user;
  } else {
    // User is signed out.
    // [START_EXCLUDE]
	  console.log("A user is not signed in!");
    logOutBtn.classList.add("d-none");
    logInBtn.classList.remove("d-none");
    userProfileBtnMainNav.classList.add("d-none");
    //User Not Signed In Banner
    var signInError = document.createElement("div"); 
    var notSignedInError = document.createTextNode("There is no user signed in! Please Sign In or Register!"); 
    signInError.appendChild(notSignedInError); //add the text node to the newly created element.
    signInError.setAttribute("style", "background-color: grey; color: snow;");
    signInError.classList.add("text-center");
    document.querySelector("#header").appendChild(signInError);
    // [END_EXCLUDE]
  }
  // [START_EXCLUDE]
  //document.getElementById('quickstart-sign-in').disabled = false;
  // [END_EXCLUDE]
});
/* firebase.auth().onAuthStateChanged(function(user){
	if (user) {
	  // User is signed in.
	  //console.log("A user is signed in See Below");
	  //console.log(user);
    logOutBtn.classList.remove("d-none");
    logInBtn.classList.add("d-none");

	} else {
	  // No user is signed in.
	  //console.log("A user is not signed in!");
    logOutBtn.classList.add("d-none");
    logInBtn.classList.remove("d-none");
	}
  });
*/
  //Sign Out
  logOutBtn.addEventListener("click", logOut);
//Sign Out Users
function logOut(){
  auth.signOut();
  //console.log("Logged Out")
}
// Get The User Auth Information if exists
var authData = localStorage.getItem("firebase_user_data");
if (authData) {
    var userProfileAuthData = JSON.parse(authData);
} else{
    console.log("No data found");
}
console.log(userProfileAuthData.uid);