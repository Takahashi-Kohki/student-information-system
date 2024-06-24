// auth.js handle authentication logic


// Import the necessary initialized Firebase instance
import firebase from './firebase';

// Handle authentication state changes
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log("User is logged in:", user);
    // Redirect or update UI for logged-in state
  } else {
    // No user is signed in
    console.log("No user is logged in.");
    // Redirect or update UI for logged-out state
  }
});
