// retriving username
auth.onAuthStateChanged(user => {
    const username = document.getElementById('username');
    const pass = document.getElementById('pass');
    if (user) {
        db.collection('users').doc(user.uid).get().then((snapshot) => {
            // console.log(snapshot.data().Name);
            username.innerText = snapshot.data().Name;
            pass.innerText = snapshot.data().Password;
        })
        
    }
    else {
        // console.log('user is not signed in to retrive username');
    }
})

// checking if user is signed in or not
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in at users.html');
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