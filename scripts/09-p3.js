/**
 * Practica 3 DOM BOM COOKIES. Erardo Aldana 2 DAW
 */

//Nuestro array de palabras random
const arrayPalabras = [
  'hola',
  'adeu',
  'practica',
  'gracias',
  'coche',
  'moto',
  'animal',
  'gato',
  'perro',
];
//Primero, nuestra función que ordenará nuestro array si así lo decide el usuario,
// mediante la función confirm, que nos retornará un boolean.
const ordenar = () => {
  var listaPalabras = '';
  //** usamos la función setTimeout para establecer una función que se realizará
  /* y establecemos 3 segundos expresados en milisegundos para que se produzca dicha llamada*/
  setTimeout(() => {
    var opcion = confirm('Deseas ordenar la lista?');
    if (opcion === true) {
      listaPalabras = arrayPalabras.sort().toString();
      //alert('Ordenada: ' + listaPalabras);
    } else {
      listaPalabras = arrayPalabras.toString();
    }
    mostrarLista(listaPalabras);
  }, 3000);
};
//Creamos una función que muestre la lista de palabras
function mostrarLista(lista) {
  document.getElementById('lista').innerHTML = lista;
}
/*Llamamos a la función mostrarLista pasando nuestro array como string como parámetro.*/

var cadenaArray = arrayPalabras.toString();
mostrarLista(cadenaArray);
ordenar();
