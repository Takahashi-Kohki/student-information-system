// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import firebase from "firebase/compat/app";


const firebaseConfig = {
  apiKey: "AIzaSyCpnWTN9gldCcctFplwJe8pHumM08Og6cA",
  authDomain: "final-year-project-cef3f.firebaseapp.com",
  databaseURL: "https://final-year-project-cef3f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-year-project-cef3f",
  storageBucket: "final-year-project-cef3f.appspot.com",
  messagingSenderId: "244063019761",
  appId: "1:244063019761:web:b71801c59b1f7cb0dc3f50",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;