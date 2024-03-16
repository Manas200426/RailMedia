
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCaizyS7qVJ0hZVSbdDgPRcLs6F9O7iY-A",
  authDomain: "railmedia2.firebaseapp.com",
  projectId: "railmedia2",
  storageBucket: "railmedia2.appspot.com",
  messagingSenderId: "519021914437",
  appId: "1:519021914437:web:45e341ce18a954f8c2f62c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app)