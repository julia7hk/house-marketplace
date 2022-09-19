import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjEjY3mt3cznZNiRiGIPRJc9qkzZXLzIU",
  authDomain: "house-marketplace-app-46e6f.firebaseapp.com",
  projectId: "house-marketplace-app-46e6f",
  storageBucket: "house-marketplace-app-46e6f.appspot.com",
  messagingSenderId: "828865805423",
  appId: "1:828865805423:web:9ba33aec6ce12fee80e19a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
