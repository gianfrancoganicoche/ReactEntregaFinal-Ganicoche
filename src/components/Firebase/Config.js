// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAtVcmfr5x0O-1gQFO46TpL1VDOWYMwGMU",

  authDomain: "pizzaclub-63aa4.firebaseapp.com",

  projectId: "pizzaclub-63aa4",

  storageBucket: "pizzaclub-63aa4.appspot.com",

  messagingSenderId: "2413616501",

  appId: "1:2413616501:web:abc53ed100848b9ff2073c",

  measurementId: "G-8LSY39SPS1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
