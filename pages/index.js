import React, { useEffect, useState, useContext } from "react";
import Layout from "./../components/layout/Layout";
import { FirebaseContext } from "./../firebase";
import DetallesProducto from "./../components/layout/DetallesProducto";

export default function Home() {
  // State
  const [productos, setProductos] = useState([]);
  // Context
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      // Query a la BD's de firestore
      firebase.db
        .collection("productos")
        .orderBy("creado", "desc")
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

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map((producto) => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
