
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKUPZ8BhR59P27LOICYopMte02xOISWOE",
    authDomain: "facebook-clone-84b79.firebaseapp.com",
    projectId: "facebook-clone-84b79",
    storageBucket: "facebook-clone-84b79.appspot.com",
    messagingSenderId: "505729191807",
    appId: "1:505729191807:web:3fdf6ab852cb84e9b9d44a",
    measurementId: "G-CGH218E06C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


 
  export{auth,provider};
  export default db;
  