import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";

import { FirebaseContext } from "./../../firebase";
import Layout from "./../../components/layout/Layout";
import Error404 from "./../../components/layout/404";

const Producto = () => {
  // State del componente
  const [producto, setProducto] = useState({});
  const [error, setError] = useState(false);

  // Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  // context de firebase
  const { firebase } = useContext(FirebaseContext);

  // useEffect se usa para evitar fallos en la consulta en la BD's
  useEffect(() => {
    if (id) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection("productos").doc(id);
        const producto = await productoQuery.get();
        if (producto.exists) {
          setProducto(producto.data());
        } else {
          setError(true);
        }
      };
      obtenerProducto();
    }
  }, [id]);

  return (
    <Layout>
      <>{error && <Error404 />}</>
    </Layout>
  );
};

export default Producto;
