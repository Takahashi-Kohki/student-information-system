// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;