// Import the necessary functions from the SDKs 
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpnWTN9gldCcctFplwJe8pHumM08Og6cA",
  authDomain: "final-year-project-cef3f.firebaseapp.com",
  databaseURL: "https://final-year-project-cef3f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-year-project-cef3f",
  storageBucket: "final-year-project-cef3f.appspot.com",
  messagingSenderId: "244063019761",
  appId: "1:244063019761:web:b71801c59b1f7cb0dc3f50",
  measurementId: "G-HTL26K6Q6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db, app };