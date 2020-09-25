import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  // Cuanso se crea una nueva instancia de firebase se inicializa la app
  constructor() {
    if (!app.apps.length) app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  // Registra un usuario
  async registrar(nombre, email, password) {
    const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    return await nuevoUsuario.user.updateProfile({
      displayName: nombre,
    });
  }

  // Inicia sesion del usuario
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  // Cierra sesion del usuario
  async cerrarSesion() {
    return await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
