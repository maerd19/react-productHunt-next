// Este hook, al estar en el provider, guarda al usuario si inicia sesion
import { useState, useEffect } from "react";
import firebase from "../firebase";

function useAutenticacion() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((usuario) => {
      // Si hay un usuario autenticado el state de este hook registra al usuario
      // setUsuarioAutenticado(usuario ? usuario : null);
      if (usuario) {
        setUsuarioAutenticado(usuario);
      } else {
        setUsuarioAutenticado(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return usuarioAutenticado;
}

export default useAutenticacion;
