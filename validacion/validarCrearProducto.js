// Reglas de validacion para crear-cuenta
export default function validarCrearCuenta(valores) {
  let errores = {};

  // Validar nombre del producto
  if (!valores.nombre) errores.nombre = "El nombre es obligatorio";
  // Validar empresa del producto
  if (!valores.empresa) errores.empresa = "Nombre de empresa obligatorio";
  // Validar url del producto
  if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL no valida";
  }
  if (!valores.url) errores.url = "URL del producto obligatoria";
  // Validar descripcion del producto
  if (!valores.descripcion)
    errores.descripcion = "Agrega una descripcion al producto";

  return errores;
}
