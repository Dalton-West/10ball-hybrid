// This Javascript Document is copyright of Damnuel Coleman West for 10ball.org //

// import sections
//buttons for navigation
var profileBtn = document.querySelector("#profileButton");
var mailinAndBillingBtn = document.querySelector("#addressButton");
var tickitsPurchasedBtn = document.querySelector("#ticketsButton");
var playerHandicapDataBtn = document.querySelector("#handicapDataButton");

//get section ID's
var userProfileSec = document.querySelector("#userProfile");
var updateProfileSec = document.querySelector("#updateProfile");
var mailingAndBillingSec = document.querySelector("#mailingAndBillingAddress");
var tournamentHistorySec = document.querySelector("#purchasedTickets");

//UserProfile Sec
var updateProfileBtn = document.querySelector("#updateProfileBtn");
// Onload Hide Sections
document.addEventListener('DOMContentLoaded', function() {
  //userProfileSec.classList.add("d-none");
  userProfileSec.classList.remove("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.add("d-none");
}, false);
//Nav Clicks
//Pofile
profileBtn.addEventListener("click", function(){
  userProfileSec.classList.remove("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.add("d-none");
}, false);
//UpdateProfileButton
updateProfileBtn.addEventListener("click", function(){
  userProfileSec.classList.add("d-none");
  updateProfileSec.classList.remove("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.add("d-none");
}, false);
//Mailing and Billing
mailinAndBillingBtn.addEventListener("click", function(){
  userProfileSec.classList.add("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.remove("d-none");
  tournamentHistorySec.classList.add("d-none");
}, false)
//Tickets Purchased
tickitsPurchasedBtn.addEventListener("click", function(){
  userProfileSec.classList.add("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.remove("d-none");
}, false)
//PlayerHandicap
playerHandicapDataBtn.addEventListener("click", function(){
  userProfileSec.classList.add("d-none");
  updateProfileSec.classList.add("d-none");
  mailingAndBillingSec.classList.add("d-none");
  tournamentHistorySec.classList.add("d-none");
}, false)

function userProfileSectionData(){
  //Show Hide Elements
    auth.onAuthStateChanged(function(user) {
        if (user != null) {
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });
}
function updateProfile(){
  
}