// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlYj4ufLdMhMyp1R8c-MX_kG8kC24RnCs",
  authDomain: "fir-authentication-9fcff.firebaseapp.com",
  projectId: "fir-authentication-9fcff",
  storageBucket: "fir-authentication-9fcff.appspot.com",
  messagingSenderId: "200502768659",
  appId: "1:200502768659:web:a0bb076531cb984de2fbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;