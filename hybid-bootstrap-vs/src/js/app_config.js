// JavaScript Copyright Damnuel Coleman West for 10ball.org
//Initialize Firbase
  var config = {
    apiKey: "AIzaSyCD1dJiTpIv0MygHTH5J97FHVl6QnMZNFk",
    authDomain: "ball-6af20.firebaseapp.com",
    databaseURL: "https://ball-6af20.firebaseio.com",
    projectId: "ball-6af20",
    storageBucket: "ball-6af20.appspot.com",
    messagingSenderId: "48314393073"
  };
  firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();