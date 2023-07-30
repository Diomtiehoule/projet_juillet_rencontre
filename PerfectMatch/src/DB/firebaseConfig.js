import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc,getDocs,updateDoc, doc,getDoc , deleteDoc} from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChlxkFgPcfu1QnCglxVNUgMh1Lyg6WgGU",
  authDomain: "ourmatch.firebaseapp.com",
  projectId: "ourmatch",
  storageBucket: "ourmatch.appspot.com",
  messagingSenderId: "916453834584",
  appId: "1:916453834584:web:5441f132a51519aa06ef2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const db = getFirestore(app)

const userCollection = collection(db , 'users')

export {db, auth,createUserWithEmailAndPassword,addDoc,signInWithEmailAndPassword,getDocs,updateDoc, doc, getDoc , collection , userCollection , deleteDoc};