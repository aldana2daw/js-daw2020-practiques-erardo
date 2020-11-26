//Practica 2 Cookies. Erardo Aldana, 2 DAW

//primero creamos un método para guardar nuestra cookie con su valor, y una fecha de expiración

function setCookie(cname, cvalue, exdays) {
  //Crearemos nuestra fecha de expiración apartir de un valor como parámetro
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  //Creamos nuestra cookie, nombre, valor feccha de expiración y path que es la ruta raiz desde dónde leer la cookie.
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
//Método para obtener el valor de una cookie, en este caso devolveremos el valor en forma de entero usando
//parseInt() del valor de la cookie
function getCookie(cname) {
  //Obtenemos el valor y recorremos nuestra cookie con un bucle para obtener
  // el valor con el nombre de la cookie, en este caso "visitas"
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return parseInt(c.substring(name.length, c.length), 10);
    }
  }
  //Si no existe
  return '';
}
/**Comprobará nuestra cookie y llamará a los métodos set y get para crear la cookie si no existe,
    obtener el valor de nuestra cookie con nuestro get y aumentar el contador de visitas en 1.
    Si tiene más 10 visitas nuestra cookie se eliminará con el método de deleteCookie.
  */

function checkCookie() {
  var contador = getCookie('visitas');
  alert('Hola' + contador);
  //Si nuestro contador no tiene ningún valor, se creará la cookie, sino, actualizaremos el valor, el tiempo de expiración es 1 mes.
  if (contador !== '' || contador === 0) {
    alert('Tus visitas: ' + contador);
    contador += 1;
    setCookie('visitas', contador, 30);
    //Si nuestras visitas superan las 10, debemos de eliminar la cookie:
    if (contador > 10) {
      deleteCookie();
    }
  } else {
    contador = 0;
    alert('Visitas: ' + contador);
    if (contador !== '' && contador !== null) {
      setCookie('visitas', contador, 30);
    }
  }
}
//Asignamos una fecha anterior para eliminar nuestra cookie:
function deleteCookie() {
  document.cookie = 'visitas=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
