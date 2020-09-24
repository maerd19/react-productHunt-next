import app from "firebase/app";

import firebaseConfig from "./config";

class Firebase {
  // Cuanso se crea una nueva instancia de firebase se inicializa la app
  constructor() {
    if (!app.apps.length) app.initializeApp(firebaseConfig);
  }
}

const firebase = new Firebase();
export default firebase;
