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
        // console.log(cred);
        return db.collection('users').doc(cred.user.uid).set({
            Name: name,
            Email: email,
            Password: password
        }).then(() => {
            // console.log('success');
            location = "login.html";
        }).catch(err => {
            // console.log(err.message);
        })
    }).catch(err => {
        // console.log(err.message);
    })
})

