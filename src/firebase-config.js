// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0kgCwX_4vzsilsbGyx3cj-2RLGUBZHz8",
  authDomain: "cakeapp-fd105.firebaseapp.com",
  projectId: "cakeapp-fd105",
  storageBucket: "cakeapp-fd105.appspot.com",
  messagingSenderId: "49159905828",
  appId: "1:49159905828:web:03a3a01050b43c12a1eeb1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
