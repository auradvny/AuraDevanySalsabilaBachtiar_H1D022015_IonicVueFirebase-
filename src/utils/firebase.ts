import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCClHYEfPdEPU-f07Oai3YyKwla66Qj58w",
    authDomain: "vue-firebase-c0098.firebaseapp.com",
    projectId: "vue-firebase-c0098",
    storageBucket: "vue-firebase-c0098.firebasestorage.app",
    messagingSenderId: "264636952901",
    appId: "1:264636952901:web:636db1ebaf684ce0cc4e2c"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };