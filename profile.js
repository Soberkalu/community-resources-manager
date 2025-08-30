// 1. Firebase Config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 3. Sign up & Save profile
document.getElementById("profile-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create user with email + password
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save profile data in Firestore
      return db.collection("users").doc(user.uid).set({
        name: name,
        phone: phone,
        role: role,
        email: email
      });
    })
    .then(() => {
      alert("Account & Profile created successfully!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
