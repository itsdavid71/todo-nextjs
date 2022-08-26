// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoWkXFQh9yJ8lvFruiUWvRUiCTra7F1Iw",
  authDomain: "todo-list-facc9.firebaseapp.com",
  projectId: "todo-list-facc9",
  storageBucket: "todo-list-facc9.appspot.com",
  messagingSenderId: "453034133688",
  appId: "1:453034133688:web:ee65faa8519d2c8f0b0c4d",
  measurementId: "G-NC8E790MJK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
