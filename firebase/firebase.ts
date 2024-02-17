// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDqPk5wouh5dO9t1YIVeBrMIWIMA6HxOj0",
    authDomain: "reviewai-f562e.firebaseapp.com",
    projectId: "reviewai-f562e",
    storageBucket: "reviewai-f562e.appspot.com",
    messagingSenderId: "463802235576",
    appId: "1:463802235576:web:1d931aa41bb3f49a0a524d",
    measurementId: "G-RZH4PZXGQX"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
