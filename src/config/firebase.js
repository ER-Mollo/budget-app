// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXFWrwNCx2cB5kVcaGQlO2cegs6o0aLCE",
  authDomain: "budget-app-d0dd6.firebaseapp.com",
  projectId: "budget-app-d0dd6",
  storageBucket: "budget-app-d0dd6.appspot.com",
  messagingSenderId: "553890974533",
  appId: "1:553890974533:web:d544857692ce270e1b0c2c",
  measurementId: "G-FSHR39NL54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);