// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKrZpDzfrbqG9rc5doQxdkNPUtVyu9h5c",
  authDomain: "reactcrud-3be8c.firebaseapp.com",
  projectId: "reactcrud-3be8c",
  storageBucket: "reactcrud-3be8c.appspot.com",
  messagingSenderId: "702636831750",
  appId: "1:702636831750:web:fb1516f9a233953609bf87",
  measurementId: "G-KYK903M7BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
