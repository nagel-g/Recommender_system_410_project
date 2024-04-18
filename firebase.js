// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgL3zrAGOWlzOjfm61G0bY24cMbaIIAtk",
  authDomain: "gstr410.firebaseapp.com",
  projectId: "gstr410",
  storageBucket: "gstr410.appspot.com",
  messagingSenderId: "157178748379",
  appId: "1:157178748379:web:379c1a46b3bc06e2d21bfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore (app);
