//Practica 1 tema 9 Cookies, Dom, Bom.  Erardo Aldana 2DAW

/**
 * Primero, deberemos de crear una función que haga lo siguiente:
 * redireccionar a google pasados unos segundos, en concreto 5.
 * Creamos nuestra función flecha "redirigir" y usamos el método setTimeout,
 * que ejecutará la función "location.href", para direccionarnos a "https://www.google.es"
 * después de 5 segundos, expresados en milisegundos como 5000
 */

const redirigir = () => {
  setTimeout("location.href='https://www.google.es/'", 5000);
};

//Después usamos nuestra función flecha
redirigir();

//Otra solución que realiza lo mismo:
function redireccionar() {
  setTimeout("location.href='https://www.google.es/'", 5000);
}
//redireccionar();
