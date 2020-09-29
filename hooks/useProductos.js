import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "./../firebase";

const useProductos = (orden) => {
  // State
  const [productos, setProductos] = useState([]);
  // Context
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      // Query a la BD's de firestore
      firebase.db
        .collection("productos")
        .orderBy(orden, "desc")
        // snapshot es la forma por la que se accede a los registros
        .onSnapshot(manejarSnapshot);
    };
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        // Acceso a los datos de cada uno de los documentos
        ...doc.data(),
      };
    });

    setProductos(productos);
  }

  return { productos };
};

export default useProductos;
