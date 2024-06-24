// Import the necessary functions from the SDKs 
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/app'; //GPT
import 'firebase/auth'; //GPT

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpnWTN9gldCcctFplwJe8pHumM08Og6cA",
    authDomain: "final-year-project-cef3f.firebaseapp.com",
    projectId: "final-year-project-cef3f",
    storageBucket: "final-year-project-cef3f.appspot.com",
    messagingSenderId: "244063019761",
    appId: "1:244063019761:web:b71801c59b1f7cb0dc3f50",
    measurementId: "G-HTL26K6Q6P"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set persistence (usually at initialization) //GPT
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    // Persistence enabled
    console.log("Firebase initialized with persistence.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth };

export default firebase;//GPT