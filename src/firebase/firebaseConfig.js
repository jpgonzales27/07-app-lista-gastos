// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//importamos firestore para nuesrtra BD
import { getFirestore } from "firebase/firestore";
//importamos Auth para el servicio de autenticacion
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//referencia para el servicio de autenticacion
const auth = getAuth();
//referencia para el servicio de firestore
const db = getFirestore(app);

/**
 * ahora desde cualquier parte de nuestra app que necesitemos la base de datos
 * o el servicio de autenticacion importaremos estas constantes
 */
export { db, auth };
