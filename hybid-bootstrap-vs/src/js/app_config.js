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
  //Firebase Auth
  var auth = firebase.auth();
//login logout buttons
var logInBtn = document.getElementById("logIn");
var logOutBtn = document.getElementById("logOut");
var regContent = document.getElementById("registerContent");
//Realtime authentication listener
firebase.auth().onAuthStateChanged(function(user){
	if (user) {
	  // User is signed in.
	  console.log("A user is signed in See Below");
	  console.log(user);
    logOutBtn.classList.remove("d-none");
    logInBtn.classList.add("d-none");
    regContent.classList.add("d-none");
	} else {
	  // No user is signed in.
	  console.log("A user is not signed in!");
    logOutBtn.classList.add("d-none");
    logInBtn.classList.remove("d-none");
	}
  });

  //Sign Out
  logOutBtn.addEventListener("click", logOut);
//Sign Out Users
function logOut(){
  auth.signOut();
  console.log("Logged Out")
}