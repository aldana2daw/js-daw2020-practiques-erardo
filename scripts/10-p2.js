//Practica 2 EVENTOS Erardo Aldana 2DAW

//primero dragstart que se produce cuando el usuario empieza a arrastrar el elemento.
document.getElementById('dragstart', function (event) {
  event.dataTranfer.setData('text/html', event.target.id);
});

//segundo creamos el evento drag ocurre una vez iniciado el arrastre, cada vez que se sigue arrastrando
//opacidad al 50% mientras lo movemos
document.addEventListener('drag', function () {
  document.getElementById('capa1').style.opacity = '0.5';
});
/*document.addEventListener('drag', arrastrar, false);*/

//Tercero, crearemos el evento dragend para hacer que al dejar de arrastrar vuelva la opacidad normal
document.addEventListener('dragend', function () {
  document.getElementById('capa1').style.opacity = '1';
});

/**
 * Destino capa 2, eventos para nuestra segunda capa
 */
//Empezaremos con el dragenter, evento que ocurrirá cuando entremos a la nueva capa
document.addEventListener('dragenter', function (event) {
  if (event.target.id == 'capa2') {
    document.getElementById('capa2').style.backgroundColor = 'red';
  }
});
//Evento que ocurrirá cuando dejemos el destino, volveremos a colocar su fondo transparente
document.addEventListener('dragleave', function (event) {
  if (event.target.id == 'capa2') {
    document.getElementById('capa2').style.backgroundColor = '';
  }
});

//Evento que usaremos para habilitar drop, ya que por defecto no nos dejará usarlo
document.addEventListener('dragover', function (event) {
  if (event.preventDefault) {
    event.preventDefault();
    return false;
  }
});
//evento de sooltar, si estamos en la capa 2 el destinoo, eliminaremos el elemento anterior arrastrable
//También escribiremos un nuevo texto en el destinom asi como cambiar su fondo
document.addEventListener('drop', function (event) {
  event.preventDefault();

  if (event.target.id == 'capa2') {
    var capa1Padre = document.getElementById('capa1');

    event.target.style.backgroundColor = 'yellow';
    event.target.appendChild(document.getElementById('capa1'));
    capa1Padre.parentNode.removeChild(capa1Padre);
    event.target.innerHTML = 'Lo has logrado!!';
  }
});
