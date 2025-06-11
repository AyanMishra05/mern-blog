// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-617fd.firebaseapp.com",
  projectId: "mern-blog-617fd",
  storageBucket: "mern-blog-617fd.firebasestorage.app",
  messagingSenderId: "200895769798",
  appId: "1:200895769798:web:f36da055e458ac23ab3bc7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
