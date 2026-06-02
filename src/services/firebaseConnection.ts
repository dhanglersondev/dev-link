import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGFFvC6tyX1x-NCHyvSpXo2GG6J57zr28",
  authDomain: "devlinks-94f50.firebaseapp.com",
  projectId: "devlinks-94f50",
  storageBucket: "devlinks-94f50.firebasestorage.app",
  messagingSenderId: "211187394990",
  appId: "1:211187394990:web:216790e596c9794459803f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };