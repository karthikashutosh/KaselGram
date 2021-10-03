import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

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
const app = firebase.initializeApp(firebaseConfig);

const projectFirestore = app.firestore();
const auth = app.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const provider = new firebase.auth.GoogleAuthProvider();

export { projectFirestore, auth, projectStorage, timestamp, provider };
