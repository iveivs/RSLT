// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "./firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDJ3t2UxtCNksPEqxhbAtCtS0lt3Da4yc",
    authDomain: "productproject-805bf.firebaseapp.com",
    projectId: "productproject-805bf",
    storageBucket: "productproject-805bf.appspot.com",
    messagingSenderId: "801290480305",
    appId: "1:801290480305:web:058f2ef926cc95337a1090",
    databaseURL: 'https://productproject-805bf-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)