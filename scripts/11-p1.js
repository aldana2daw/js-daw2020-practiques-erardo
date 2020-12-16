/**
 * Práctica 1 Promesas Erardo Aldana
 */

//Primero, haremos nuestra función temporizador, recibe los milisegundos a esperar antes de resolver
function espera(ms) {
  let promesa = new Promise((resolver, rechazar) => {
    let idTimeBien = setTimeout(() => resolver('Tiempo concluido'), ms);
    let idTimeMal = setTimeout(
      () => rechazar(Error('Tiempo no va bien')),
      ms * 2
    );
  });

  //aquí obtendremos el mensaje de respuesta o rechazo de la promesa
  promesa
    .then((respuesta) => {
      escribirEnPantalla(respuesta);
    })
    .catch((error) => {
      escribirEnPantalla(error.message);
    });
}

//llamamos a nuestra función
espera(5000);

// método para escribir por pantalla nuestros mensajes, de forma que creamos un elemento nuevo
// y lo añadimos al cuerpo de la página
function escribirEnPantalla(mensaje) {
  var texto = document.createElement('p');
  texto.appendChild(document.createTextNode(mensaje));
  document.body.appendChild(texto);
}
