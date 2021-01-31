/**
 * Mostra una pàgina que mostre una llista de paraules (fica 10 paraules tú mateix,
 * fixes i desordenades, no cal que l'usuari les introduïsca).
 *  Pregunta a l'usuari (amb la funció confirm), després de 3 segons en la pàgina,
 *  si vols que la llista isca ordenada alfabèticament. Si accepta,
 *  esborra la llista que existia i mostra la llista ara ordenada alfabèticament.
 */
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
  'elefante',
];
//Primero, nuestra función que ordenará nuestro array si así lo decide el usuario,
// mediante la función confirm, que nos retornará un boolean.
const ordenar = () => {
  var listaPalabras = [];
  //** usamos la función setTimeout para establecer una función que se realizará
  /* y establecemos 3 segundos expresados en milisegundos para que se produzca dicha llamada*/
  setTimeout(() => {
    var opcion = confirm('Deseas ordenar la lista?');
    if (opcion === true) {
      listaPalabras = arrayPalabras.sort();
      //alert('Ordenada: ' + listaPalabras);
    } else {
      listaPalabras = arrayPalabras;
    }
    mostrarLista(listaPalabras);
  }, 3000);
};
//Creamos una función que muestre la lista de palabras
function mostrarLista(lista) {
  $('ul#lista').find('li').remove();
  lista.forEach((element) => {
    $('body')
      .find('ul')
      .filter('#lista')
      .append('<li>' + element + '</li>');
  });
}
/*Llamamos a la función mostrarLista pasando nuestro array como string como parámetro.*/

$(document).ready(function () {
  mostrarLista(arrayPalabras);
  ordenar();
});
