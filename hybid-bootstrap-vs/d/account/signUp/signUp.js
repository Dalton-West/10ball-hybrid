//Buttons
const emailRegisterBtn = document.getElementById("regBTN");
const facebookSignUpBtn = document.getElementById("fbBtn");
const googleSignUpBtn = document.getElementById("googleBtn");

//Onclick Actions
emailRegisterBtn.addEventListener("click", signUpWithEmail, false);
emailRegisterBtn.addEventListener("click", function(){console.log("This is the anon array!");}, false);

facebookSignUpBtn.addEventListener("click", signUpWithFacebook, false);

googleSignUpBtn.addEventListener("click",signUpWithGoogle, false);


//Check If the user is already signed in



//Sign Up with email
function signUpWithEmail(){
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
    console.log(_UserData);
    return true;
}
//Sign Up with Facebook
function signUpWithFacebook(){

    console.log("Facebook Clicked");
    return true;
}
//Sign Up with Google
function signUpWithGoogle(){
    console.log("Google Clicked");
    return true;
}
