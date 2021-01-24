//Aqui trataremos el evento del video, una vez cargados los elementos,
// añadiremos los eventos para tratar los clicks del ratón
window.addEventListener('load', (ev) => {
  let video = document.getElementById('video');
  let main = document.querySelector('main');
  //Aquí tratamos el evento de pulsar clic izquierdo
  video.addEventListener('mousedown', (ev) => {
    //Con un solo SWITCH, tratamos los casos
    switch (ev.which) {
      //caso del boton izquierdo, si esta pausado, reanuda
      case 1:
        if (!video.paused) {
          video.pause();
        } else {
          video.play();
        }
        break;
      //Caso del boton derecho, tratamos el tiempo devuelto con un método
      case 3:
        main.textContent =
          'Duración del video: ' + transformHMS(video.duration);
        break;
    }
  });
});
/**
 * Método para convertir tiempo del video a minutos y segundos
 * @param {*} duracion segundos del video
 */
function transformHMS(duracion) {
  //Minutos
  let mins = Math.floor((duracion / 60) % 60);
  mins = mins < 10 ? '0' + mins : mins;
  //Segundos
  let seg = duracion % 60;
  seg = seg < 10 ? '0' + seg : seg;

  return mins + ':' + Math.round(seg);
}
