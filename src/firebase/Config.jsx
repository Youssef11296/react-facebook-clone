import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCQXz3bs8blFBxKSy54ZEcoaBhTDYJMmM",
  authDomain: "facebook-clone-62009.firebaseapp.com",
  databaseURL: "https://facebook-clone-62009.firebaseio.com",
  projectId: "facebook-clone-62009",
  storageBucket: "facebook-clone-62009.appspot.com",
  messagingSenderId: "719007890275",
  appId: "1:719007890275:web:e9f0c9d15c7b76461fb156",
  measurementId: "G-3EYJNQXXVE",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
