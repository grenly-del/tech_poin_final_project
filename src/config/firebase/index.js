// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm6yaWNaeVrTaV4ErzZN-n-7JdZSHVNVU",
  authDomain: "techpoint-frontend.firebaseapp.com",
  projectId: "techpoint-frontend",
  storageBucket: "techpoint-frontend.firebasestorage.app",
  messagingSenderId: "805524707865",
  appId: "1:805524707865:web:7069ee58b847b3f486e888",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
