// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSF8aqProWyUB0qd1l2S-rcZq7bgbVudY",
  authDomain: "ema-john-firebase-auth-3f4b3.firebaseapp.com",
  projectId: "ema-john-firebase-auth-3f4b3",
  storageBucket: "ema-john-firebase-auth-3f4b3.appspot.com",
  messagingSenderId: "895138350275",
  appId: "1:895138350275:web:c60976961bf9568c76ce76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;