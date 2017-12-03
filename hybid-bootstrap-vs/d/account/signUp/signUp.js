//Buttons
const emailRegisterBtn = document.getElementById("regBTN");
const facebookSignUpBtn = document.getElementById("fbBtn");
const googleSignUpBtn = document.getElementById("googleBtn");

//Onclick Actions
emailRegisterBtn.addEventListener("click", signUpWithEmail, false);
emailRegisterBtn.addEventListener("click", dataToDataBase, false);

facebookSignUpBtn.addEventListener("click", signUpWithFacebook, false);

googleSignUpBtn.addEventListener("click", signUpWithGoogle, false);


//Sign Up with email
function signUpWithEmail() {
    // Get Form Data Fields
    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var displayName = document.querySelector("#displayName").value;
    var email = document.querySelector("#userEmail").value;
    var password = document.querySelector("#userPassword").value;

    var _UserData = {
        firstName: firstName,
        lastName: lastName,
        displayName: displayName,
        email: email,
        userCreated: Date()
        //timestamp: db.FieldValue.serverTimestamp()
    };
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("user_data_key", JSON.stringify(_UserData));;
    } else {
        document.getElementById("#content").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    //console.log(_UserData);
    auth.createUserWithEmailAndPassword(email, password);
}

//Get Data And Post To Database
function dataToDataBase() {
    // Retrieve
    var storedData = localStorage.getItem("user_data_key");
    if (storedData != "") {
        var usersDataInput = JSON.parse(storedData);
        console.log("The Data Entered into the form is" + usersDataInput);
        return usersDataInput;
    } else {
        console.log("No data found");
    }
    updateProfile();
}

function updateProfile() {
    var user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: usersDataInput.displayName,
        photoURL: "."
    }).then(function () {
        // Update successful.
        console.log("Profile Updated");
    }).catch(function (error) {
        // An error happened.
        console.log("Profile Update Failed");
    });
}
//Sign Up with Facebook
function signUpWithFacebook() {

    console.log("Facebook Clicked");
    return true;
}
//Sign Up with Google
function signUpWithGoogle() {
    console.log("Google Clicked");
    return true;
}
//setErrors For Signup form
function setError(id, message) {
    document.getElementById(id + "-error").innerHTML = message;
}