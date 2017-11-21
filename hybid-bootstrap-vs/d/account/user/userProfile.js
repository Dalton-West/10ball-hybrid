// This Javascript Document is copyright of Damnuel Coleman West for 10ball.org //

// import sections
//buttons for navigation
var profileBtn = document.querySelector("#profileButton");
var mailinAndBillingBtn = document.querySelector("#addressButton");
var tickitsPurchasedBtn = document.querySelector("#ticketsButton");
var playerHandicapDataBtn = document.querySelector("#handicapDataButton");

//get section ID's
var userProfileSec = document.querySelector("#userProfileSection");
var updateProfileSec = document.querySelector("#updateProfile");
var mailingAndBillingSec = document.querySelector("#mailingAndBillingAddress");
var tournamentHistorySec = document.querySelector("#purchasedTickets");
var playerHandicapSec = document.querySelector("#playerHandicap");
//UserProfile Sec
var updateProfileBtn = document.querySelector("#updateProfileBtn");
// Onload Hide Sections
document.addEventListener('DOMContentLoaded', function() {
  //userProfileSec.classList.add("d-none");
  userProfileSec.classList.remove("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.add("d-none");
  playerHandicapSec.classList.add("d-none");
}, false);
//Onload Check USer Profile
document.addEventListener('DOMContentLoaded', userProfileSectionData, false);
//Nav Clicks
//Pofile
profileBtn.addEventListener("click", function(){
  userProfileSec.classList.remove("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.add("d-none");
  playerHandicapSec.classList.add("d-none");
}, false);
//UpdateProfileButton
updateProfileBtn.addEventListener("click", function(){
  userProfileSec.classList.add("d-none");
  updateProfileSec.classList.remove("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.add("d-none");
  playerHandicapSec.classList.add("d-none");
}, false);
//Mailing and Billing
mailinAndBillingBtn.addEventListener("click", function(){
  userProfileSec.classList.add("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.remove("d-none");
  tournamentHistorySec.classList.add("d-none");
  playerHandicapSec.classList.add("d-none");
}, false)
//Tickets Purchased
tickitsPurchasedBtn.addEventListener("click", function(){
  userProfileSec.classList.add("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.remove("d-none");
  playerHandicapSec.classList.add("d-none");
}, false)
//PlayerHandicap
playerHandicapDataBtn.addEventListener("click", function(){
  userProfileSec.classList.add("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.add("d-none");
  playerHandicapSec.classList.remove("d-none");
}, false)

function userProfileSectionData(){
  //Show Hide Elements
    auth.onAuthStateChanged(function(user) {
      // Where Data Needs to be shown!
  //Nav
var nameLeftNav = document.querySelector("#userDisplayName");
var userProfileImage = document.querySelector("#profilePicture");
//Content :: User Information
var contentUserFirstName = document.querySelector("#userFirstNameData");
var contentUserLastName = document.querySelector("#userLastNameData");
var contentUserDisplayName = document.querySelector("#userDisplayNameData");
var contentUserEmail = document.querySelector("#useremailAddressData");
//User Profile
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;
if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;
//Set Data
if (name == null){
  nameLeftNav.innerHTML = "There was an error with <br> getting your name please <br> update profile";
  nameLeftNav.classList.add("error-message");
} else{
  nameLeftNav.innerHTML = name;
}
if (photoUrl == null){
  //alert("User Photo is " + photoUrl);
  userProfileImage.src = "../../../img/boy-512.png";
} else{
  userProfileImage.src = photoUrl;
}
if(uid == null){
  alert("A User Is Not Signed In Please Login or Register!");
} else{
  //console.log("The Users ID is " + uid);
}
  
  
  
  contentUserFirstName.innerHTML = "User First Name To be pulled from data base";
  contentUserLastName.innerHTML = "User Last Name To be pulled from data base";
  contentUserDisplayName.innerHTML = "User Display Name To be pulled from data base";
  contentUserEmail.innerHTML = email;
 // console.log(email);
  //End User
} else{
  nameLeftNav.innerHTML = "No User Logged In";
  contentUserFirstName.innerHTML = "No Name On File or User Not Logged In";
  contentUserLastName.innerHTML = "No Name On File or User Not Logged In";
  contentUserDisplayName.innerHTML = "No Display Name On File or User Not Logged In";
  contentUserEmail.innerHTML = "No Email On File or User Not Logged In";
}
});
}

//Update Profile Section
function updateProfile(){
  
}