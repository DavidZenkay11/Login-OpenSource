// signup
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = signupForm['name'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    console.log(name, email, password);
    signupForm.reset();
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        
        verificar();
        })
        .then(() => {
            // console.log('success');

            alert("Revisa tu bandeja de entrada para validar el mail");


            location = "login.html";
        }).catch(err => {
            // console.log(err.message);
        })
    }).catch(err => {
        // console.log(err.message);
    })


    function verificar() {
        var user = firebase.auth().currentUser;
    
    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
    }