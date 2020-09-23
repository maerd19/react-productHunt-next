import React, { useState, useEffect } from "react";

const useValidacion = (stateInicial, validar, fn) => {
  const [valores, setValores] = useState(stateInicial);
  const [errores, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    // Validacion del formulario al hacer submit
    if (submitForm) {
      const noErrores = (Object.keys(errores).length = 0);

      if (noErrores) {
        fn(); // Funcion que se ejecuta en el componente
      }
      setSubmitForm(false);
    }
  }, []);

  // El usuario escribe
  const handleChange = (e) => {
    setValores({ ...valores, [e.target.name]: e.target.value });
  };

  // El usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar es un funcion que este hook recibe como parametro
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  return { valores, errores, submitForm, handleSubmit, handleChange };
};

export default useValidacion;
