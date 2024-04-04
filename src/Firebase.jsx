// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "expensemanager-2dc38.firebaseapp.com",
  projectId: "expensemanager-2dc38",
  storageBucket: "expensemanager-2dc38.appspot.com",
  messagingSenderId: "426638972616",
  appId: "1:426638972616:web:e946fd85b6349995d037fd",
  measurementId: "G-DYPL2ZGD9T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();