import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA01d56fwG5RDgGkmqOATmR5qhAr3mZo-Q",
  authDomain: "second-app-d248c.firebaseapp.com",
  projectId: "second-app-d248c",
  storageBucket: "second-app-d248c.firebasestorage.app",
  messagingSenderId: "414185613108",
  appId: "1:414185613108:web:2998a6c1da3a900a94a761"
};

// Initialize Firebas   
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);