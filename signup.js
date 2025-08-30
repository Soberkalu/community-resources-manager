// Firebase config (replace with your actual Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyAz53O8Lxr6XqKFBll8Jzoekmet29Zu3DY",
    authDomain: "community-resources-manager.firebaseapp.com",
    projectId: "community-resources-manager",
    storageBucket: "community-resources-manager.firebasestorage.app",
    messagingSenderId: "647841258598",
    appId: "1:647841258598:web:d31c2e4b8770038e37e1a7",
    measurementId: "G-TS9R5NSRKB"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Grab elements
const signupForm = document.getElementById("signup-form");
const message = document.getElementById("message");

// Handle Sign Up
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      message.style.color = "green";
      message.textContent = "✅ Account created successfully!";
      console.log("User:", userCredential.user);
    })
    .catch((error) => {
      message.style.color = "red";
      message.textContent = "❌ " + error.message;
    });
});
