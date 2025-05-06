// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGfzDn77_dS8hI9cFNbfqTRwoqJC-Kdj4",
  authDomain: "user-manage-b64a9.firebaseapp.com",
  projectId: "user-manage-b64a9",
  storageBucket: "user-manage-b64a9.firebasestorage.app",
  messagingSenderId: "1025176333878",
  appId: "1:1025176333878:web:ed6f1028a80d6744433297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;