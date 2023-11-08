
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDHaHBKnzgp9ou7wM_ytd1EsJLejb2wPXI",
  authDomain: "railmedia-e8586.firebaseapp.com",
  projectId: "railmedia-e8586",
  storageBucket: "railmedia-e8586.appspot.com",
  messagingSenderId: "440834605723",
  appId: "1:440834605723:web:3ca075a98b79f0799f7c3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app)