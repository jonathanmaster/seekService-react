import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // put your credentials here
  apiKey: "AIzaSyBrNyg9Nvxz8pjccVEJTzzRe-uqLE8V2i0",
  authDomain: "react-fb-auth-a2263.firebaseapp.com",
  projectId: "react-fb-auth-a2263",
  storageBucket: "react-fb-auth-a2263.appspot.com",
  messagingSenderId: "651880815323",
  appId: "1:651880815323:web:53c0bb03e07e811d784afe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
