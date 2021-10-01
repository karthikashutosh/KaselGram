import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDINbjDrKW9EHbyvKwpPvB0N_9Rzaavkc4",
  authDomain: "kaselgram-979a5.firebaseapp.com",
  projectId: "kaselgram-979a5",
  databaseURL: "https://kaselgram-979a5-default-rtdb.firebaseio.com/",
  storageBucket: "kaselgram-979a5.appspot.com",
  messagingSenderId: "330989680255",
  appId: "1:330989680255:web:2048561e8daef58fee714a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, timestamp, provider };
