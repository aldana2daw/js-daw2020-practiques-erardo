// Mismo módulo de la práctica 1 para hacer la práctica 2 Promesas.

//Primero, haremos nuestra función temporizador, recibe los milisegundos a temporizadorr antes de resolver
export function temporizador(ms) {
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

// metodo para escribir por pantalla nuestros mensajes, de forma que creamos un elemento nuevo
// y lo añadimos al elemento pasado por parámetro
// Si existe el elemento, lo añadimos al elemento existente

export function escribirEnPantalla(mensaje, elemento) {
  let parrafo = document.querySelector(elemento + '> p');
  if (parrafo !== '' && parrafo !== null) {
    parrafo.innerHTML = mensaje;
  } else {
    let texto = document.createElement('p');
    texto.appendChild(document.createTextNode(mensaje));
    document.querySelector(elemento).appendChild(texto);
  }
}
