// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmeT7phqGmiGIEO_vZ9GgI1apUqpcoeLc",
  authDomain: "clone-24670.firebaseapp.com",
  projectId: "clone-24670",
  storageBucket: "clone-24670.appspot.com",
  messagingSenderId: "301372508176",
  appId: "1:301372508176:web:16ded1549f791654952295",
  measurementId: "G-Y47NW6SWV1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
