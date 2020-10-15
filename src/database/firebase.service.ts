import admin from "firebase-admin";
import { resolve } from "path";

/**
 * Configuración de conexión con firebase
 * Todo Cambiar los valores para la version final
 */
let _credential = require(resolve(__dirname, "./../../firebase.json"))
let _databaseURL = "https://barrio-eats.firebaseio.com"

export const FirebaseFirestore = admin.initializeApp({
  credential: admin.credential.cert(_credential),
  databaseURL: _databaseURL
}).firestore()
