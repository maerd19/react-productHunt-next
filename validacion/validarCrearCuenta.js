// Reglas de validacion para crear-cuenta
export default function validarCrearCuenta(valores) {
  let errores = {};

  // Validar nombre del usuario
  if (!valores.nombre) errores.nombre = "El nombre es obligatorio";
  // Validar email del usuario
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email no valido";
  }
  if (!valores.email) errores.email = "El email es obligatorio";

  // Validar password del usuario
  if (!valores.password) errores.password = "El password es obligatorio";
  if (valores.password.length < 6) {
    errores.password = "El password debe ser de al menos 6 caracteres";
  }

  return errores;
}
