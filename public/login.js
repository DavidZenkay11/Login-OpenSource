
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginEmail = loginForm['login-email'].value;
    const loginPassword = loginForm['login-password'].value;
    // console.log(loginEmail, loginPassword);
    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
        var user = firebase.auth().currentUser;
        
        if (user.emailVerified) {
           
            console.log('login success');
            location = "index.html";
            
        } else {
            alert("Mail no valido")
        }
    }).catch(err => {
        // console.log(err.message);
    })
})

