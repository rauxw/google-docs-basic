// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPZMR2AqkSmloUCR4zhmeClgytfR3MT64",
  authDomain: "docs-v1-33119.firebaseapp.com",
  projectId: "docs-v1-33119",
  storageBucket: "docs-v1-33119.firebasestorage.app",
  messagingSenderId: "171111295424",
  appId: "1:171111295424:web:a8c83bb8f7bff362a10025",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
