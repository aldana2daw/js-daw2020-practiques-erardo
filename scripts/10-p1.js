//Practica Eventos 1 Erardo Aldana 2DAW

/**
 * Primero crearemos nuestro evento que se quedará a la espera en segundo plano de que se liberen las 2 teclas a la vez
 * En nuestro evento le diremos que será de tipo keyup y pasaremos una función flecha con parametro event,
 * que será creado por el navegador, y si se sueltan esas 2 teclas, cambiaremos el fondo.
 */
document.addEventListener(
  'keyup',
  (event) => {
    if (event.altKey && event.key == 'F12') {
      document.getElementById('imagen').style.backgroundImage =
        "url('img/fondoImagen.jfif')";
    }
  },
  false
);
