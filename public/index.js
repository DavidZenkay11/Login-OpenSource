// retriving username
auth.onAuthStateChanged(user => {
    const username = document.getElementById('username');
    const pass = document.getElementById('pass');
    var user = firebase.auth().currentUser;
    if (user) {
       console.log(user)
            // console.log(snapshot.data().Name);
            username.innerText = user.email;
            pass.innerText = user.password;
        
        
    }
    else {
        // console.log('user is not signed in to retrive username');
    }
})

// checking if user is signed in or not
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in at users.html');
         // User is signed in.
    var displayName = user.displayName;
    console.log(displayName)
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    }
    else {
        alert('Tu sesion ha expirado, de igual manera nos quedamos con tus datos. ¡Suerte!');
        location = "login.html";
    }
})

// logout
function logout() {
    auth.signOut();
}