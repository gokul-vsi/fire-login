// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKg4awftgxIarbiH3pTIDHr8GztBLvSco",
  authDomain: "fir-login-953cd.firebaseapp.com",
  projectId: "fir-login-953cd",
  storageBucket: "fir-login-953cd.firebasestorage.app",
  messagingSenderId: "413224969349",
  appId: "1:413224969349:web:1b9452f77acf53083375ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;