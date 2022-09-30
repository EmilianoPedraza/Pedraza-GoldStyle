// Import the functions you need from the SDKs you need
//Permite conectar nuestro proyecto con firebase
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//PARA EL PASO 1
import {getFirestore} from "firebase/firestore"




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFHspgIEMWmQFSwy5nFUg9sBmTnT3MBrI",
  authDomain: "goldstyle-337f3.firebaseapp.com",
  projectId: "goldstyle-337f3",
  storageBucket: "goldstyle-337f3.appspot.com",
  messagingSenderId: "881609791782",
  appId: "1:881609791782:web:fe5e215edde69e86fd09e7"
};

// Initialize Firebase
//instancia de la conección
const app = initializeApp(firebaseConfig);


//1-accedo a la base de datos: Usamos db para llamar desde nuestro proyecto a los datos de la base de datos
export const db = getFirestore(app)


