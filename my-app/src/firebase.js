import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1T2hNal8qpHAXLNnJLLYguFr-__37Po0",
  authDomain: "challenge-a46d3.firebaseapp.com",
  projectId: "challenge-a46d3",
  storageBucket: "challenge-a46d3.appspot.com",
  messagingSenderId: "126141116292",
  appId: "1:126141116292:web:62e61391f994cc3d2cf7d1",
  measurementId: "G-5YSYDJ0514",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
