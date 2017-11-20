// This Javascript Document is copyright of Damnuel Coleman West for 10ball.org //

// import sections
//buttons for navigation
var profileBtn = document.querySelector("#profileButton");
var userAddressBtn = document.querySelector("#addressButton");
var tickitsPurchasedBtn = document.querySelector("#ticketsButton");
var playerHandicapDataBtn = document.querySelector("#handicapDataButton");

//get section ID's
var userProfileSec = document.querySelector("#userProfile");
var updateProfileSec = document.querySelector("#updateProfile");
var mailingAndBillingSec = document.querySelector("#mailingAndBillingAddress");
var tournamentHistorySec = document.querySelector("#purchasedTickets");

//userProfileButton Click
profileBtn.addEventListener("click", );

function userProfileSectionData(){
    auth.onAuthStateChanged(function(user) {
        if (user != null) {
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });
}
