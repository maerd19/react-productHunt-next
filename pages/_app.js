import firebase, { FirebaseContext } from "./../firebase";
// Este hook se hace disponible la informacion del usuario autenticado en toda la app
import useAutenticacion from "./../hooks/useAutenticacion";

function MyApp({ Component, pageProps }) {
  const usuario = useAutenticacion();
  console.log(usuario);
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
