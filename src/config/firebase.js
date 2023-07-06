import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDPrfXfTpQM_KYwE2LrGItFIp1qUtQG2Is",
  authDomain: "artsy-84b89.firebaseapp.com",
  projectId: "artsy-84b89",
  storageBucket: "artsy-84b89.appspot.com",
  messagingSenderId: "576220315671",
  appId: "1:576220315671:web:dabe5cb79b36d0a5b51c52",
  measurementId: "G-N5NJ8X9L5F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);