// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX3Gv8CsBik-FrazQbLQtIwhM9jmtF-a0",
  authDomain: "eatright-01.firebaseapp.com",
  projectId: "eatright-01",
  storageBucket: "eatright-01.appspot.com",
  messagingSenderId: "416951436536",
  appId: "1:416951436536:web:8aa58381b4accbc58ba70d",
  measurementId: "G-8HFC3YRQ1V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);