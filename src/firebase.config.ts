import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-rBrcjqrQcA0HW-5J-BKgmkAvd-8MKbg",
  authDomain: "scissor-3ffc7.firebaseapp.com",
  projectId: "scissor-3ffc7",
  storageBucket: "scissor-3ffc7.appspot.com",
  messagingSenderId: "807176226490",
  appId: "1:807176226490:web:556944b279382e4554a483",
  measurementId: "G-D5E566TNQK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, analytics, auth };
