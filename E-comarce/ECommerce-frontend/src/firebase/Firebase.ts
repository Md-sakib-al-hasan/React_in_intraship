// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOoAT9qSk-_AVAMrdMokHhg7_wvXoSvpo",
  authDomain: "ecommerce-1e81c.firebaseapp.com",
  projectId: "ecommerce-1e81c",
  storageBucket: "ecommerce-1e81c.appspot.com",
  messagingSenderId: "228926666670",
  appId: "1:228926666670:web:638bc09898004c3b7e3a3f",
  measurementId: "G-ZRG5JELMXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;