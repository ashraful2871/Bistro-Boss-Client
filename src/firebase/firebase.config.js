// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB5S-tn2AXAkQAZ57jmp4iiPou91yLkF4",
  authDomain: "bistro-boss-c8b0f.firebaseapp.com",
  projectId: "bistro-boss-c8b0f",
  storageBucket: "bistro-boss-c8b0f.firebasestorage.app",
  messagingSenderId: "398932980215",
  appId: "1:398932980215:web:21e77d225227a076fabef2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
