// Initialize Firebase (use your own Firebase configuration)
const firebaseConfig = {
    apiKey: "AIzaSyCTHc5uV9qLcOmpo_kZBAWs0DJ8dLPkxhE",
    authDomain: "recruitmentcv-fe4aa.firebaseapp.com",
    projectId: "recruitmentcv-fe4aa",
};
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Authentication
const auth = firebase.auth();

// DOM elements
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupButton = document.getElementById("signup-button");
const errorMessage = document.getElementById("error-message");

// Log In event listener
loginButton.addEventListener("click", () => {
    const email = loginEmail.value;
    const password = loginPassword.value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Successfully logged in
            errorMessage.textContent = "";
            window.location.href = "inbox.html"; // Redirect to inbox or dashboard
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});

// Sign Up event listener
signupButton.addEventListener("click", () => {
    const email = signupEmail.value;
    const password = signupPassword.value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Successfully signed up
            errorMessage.textContent = "";
            window.location.href = "inbox.html"; // Redirect to inbox or dashboard
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});
