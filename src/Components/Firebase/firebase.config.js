// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ddv2oS4rAyw40GErWadmGIC5TJtaTzg",
  authDomain: "email-pass-ba4a7.firebaseapp.com",
  projectId: "email-pass-ba4a7",
  storageBucket: "email-pass-ba4a7.firebasestorage.app",
  messagingSenderId: "649799568608",
  appId: "1:649799568608:web:fcb16fa58e804aa4fe5485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);