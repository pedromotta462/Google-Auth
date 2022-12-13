// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR506EVErPz1rXScl2LmAM5rtHcwo6Tz8",
  authDomain: "auth-369d4.firebaseapp.com",
  projectId: "auth-369d4",
  storageBucket: "auth-369d4.appspot.com",
  messagingSenderId: "434992521685",
  appId: "1:434992521685:web:8b0696d849d77c3545dd5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //inicializa a conexão com o firebase
export const auth =getAuth(app) //obtem os parametros de autenticação