// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc,deleteDoc, doc, collection, getDocs } from "firebase/firestore";  // Import Firestore functions


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIfY_w0DBETc9wzYYGvRKMJ3q9HT7orxM",
  authDomain: "k-musicapp.firebaseapp.com",
  projectId: "k-musicapp",
  storageBucket: "k-musicapp.firebasestorage.app",
  messagingSenderId: "689298534863",
  appId: "1:689298534863:web:a8cda42183f077236ae2ba",
  measurementId: "G-NK72J469WP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Optional, if you want to use analytics

// Initialize Firestore
const db = getFirestore(app);  // Firestore initialization

// Export Firestore to use in other parts of the app
export { db };
export { addDoc, collection, deleteDoc, doc,  getDocs };