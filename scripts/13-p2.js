/** Erardo Aldana Pessoa */
//Primero, haremos nuestra función temporizador, recibe los milisegundos a temporizadorr antes de resolver
function temporizador(ms) {
  let promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => resolver('Tiempo concluido'), ms);
    //La parte de rechazar no daría error nunca, en este caso
  });
  return promesa;
}

// metodo para escribir por pantalla nuestros mensajes, de forma que creamos un elemento nuevo
// y lo añadimos al elemento pasado por parámetro
// Si existe el elemento, lo añadimos al elemento existente

async function escribirEnPantalla(mensaje, elemento) {
  let parrafo = document.querySelector(elemento + '> p');
  if (parrafo !== '' && parrafo !== null) {
    parrafo.innerHTML = mensaje;
  } else {
    let texto = document.createElement('p');
    texto.appendChild(document.createTextNode(mensaje));
    document.querySelector(elemento).appendChild(texto);
  }
}
/**
 * Método para mostrar una notificacion por pantalla
 * Creamos la notificacion con new Notification, y en el cuerpo un mensaje
 */
function mostrarNotificacion() {
  let noti = new Notification('Información', {
    body: 'Se ha publicado un nuevo vídeo',
  });
  /**
   * Aquí añadimos el evento que ocurrirá al hacer click en la notificación, no redirige a la siguiente pantalla
   */
  noti.addEventListener('click', (ev) => {
    window.open('../13-Apis-P2-Video.html');
  });
  console.log('Holaaaa');
}
//function asíncrona para contar hacia atras, valores por parámetro:
// número de inicio cuentaAtras atrás, elemento, intervalo, y una función callback que se ejecutaría al final
async function cuentaAtras(num, element = 'body', intval = 1000, funcFinal) {
  while (num >= 0) {
    await temporizador(intval);
    escribirEnPantalla(num--, element);
  }
  if (funcFinal != undefined) {
    let permiso = Notification.permission;

    if (permiso == 'default') {
      Notification.requestPermission().then((resp) => {
        if (resp == 'granted') {
          console.log('Hola 1');
          funcFinal();
        }
      });
    } else if (permiso == 'granted') {
      console.log('Hola 2');
      funcFinal();
    }
  }
}
//Llamamos a la funcion con la funcion final, nuestra notificacion
cuentaAtras(5, '.p1', 1000, mostrarNotificacion);
