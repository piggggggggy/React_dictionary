import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // config
    apiKey: "AIzaSyCwEhaKCuf2e7q2CA2m1BURBw6SaNY_lmQ",
    authDomain: "reactdictionarypg.firebaseapp.com",
    projectId: "reactdictionarypg",
    storageBucket: "reactdictionarypg.appspot.com",
    messagingSenderId: "827146651419",
    appId: "1:827146651419:web:e7217ad3e16cd8615975be",
    measurementId: "G-QRLK1SYJ6J"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };