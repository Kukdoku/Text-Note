import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkbyY20e5LoCsflsKWgIulIBJgwNLnS50",
  authDomain: "evernote-9a47e.firebaseapp.com",
  projectId: "evernote-9a47e",
  storageBucket: "evernote-9a47e.appspot.com",
  messagingSenderId: "1089961484964",
  appId: "1:1089961484964:web:9b8f55d6d5c2d2a422bc31",
  measurementId: "G-M60R9V251K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
