///Traigo una funcion que me conecta la app de React (codigo del front end ) con la plataforma de firebase
import { initializeApp } from "firebase/app";

//Traigo una funcion que me conecta con el servicio de base de datos de firebase
import { getFirestore } from "firebase/firestore";


//Estas son mis llaves de accesso
const firebaseConfig = {
  apiKey: "AIzaSyDIrLxlLHdCCMSJDzMdCi2s8ZGGvBsenLE",
  authDomain: "proyecto-react-43575.firebaseapp.com",
  projectId: "proyecto-react-43575",
  storageBucket: "proyecto-react-43575.appspot.com",
  messagingSenderId: "539742076089",
  appId: "1:539742076089:web:225acb7d4112671e1f2f68"
};

//Esta es una variable que representa "la plataforma" en si
const app = initializeApp(firebaseConfig);

//Esta es una variable que representa "la pestaña Firestore Database o la base de datos"
export const db = getFirestore(app);