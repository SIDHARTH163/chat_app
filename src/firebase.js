// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSL-ukZt5VrulU_lMXa-SuPBs7t5DeohA",
  authDomain: "chatapp-ff54f.firebaseapp.com",
  projectId: "chatapp-ff54f",
  storageBucket: "chatapp-ff54f.appspot.com",
  messagingSenderId: "608924052208",
  appId: "1:608924052208:web:3f0fb92052c7c925d8f035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
