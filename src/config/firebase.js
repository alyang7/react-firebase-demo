// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8JP7UUbwJF6jA2xur18J8oRdf3lM5Wxk",
  authDomain: "fir-tutorial-b6443.firebaseapp.com",
  projectId: "fir-tutorial-b6443",
  storageBucket: "fir-tutorial-b6443.appspot.com",
  messagingSenderId: "434834246336",
  appId: "1:434834246336:web:36e437c0231456cd73bb25",
  measurementId: "G-XPS05L32XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);