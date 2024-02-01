// Import the necessary functions
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhhnCxXoxIrHL1fz4tr9cJ9uG-w2bOcg4",
    authDomain: "auth-9586d.firebaseapp.com",
    projectId: "auth-9586d",
    storageBucket: "auth-9586d.appspot.com",
    messagingSenderId: "1049087288556",
    appId: "1:1049087288556:web:82c0b11a095158c2ddb1c9"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);