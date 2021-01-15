/**
 * Erardo Aldana 2DAW. Práctica Ajax.
 */

/**
 * Primero, declaramos nuestros enlaces de las APIS que usaremos
 */
const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

//método para limpiar los campos del user
function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    //console.log(element);
  });
}

/**
 * Método async para procesar las llamadas fetch
 * @param {*} numsecs numsecs establecido para el delay
 * @param {*} user num user para la llamada
 */
async function procesarFetch(numsecs, user) {
  //Los campos a rellenar
  let idUser = document.getElementById('id');
  let emailUser = document.getElementById('email');
  let firstName = document.getElementById('name');
  let status = document.getElementById('status');

  //Hecho con promesas para entender mejor el procedimiento:
  /*
  fetch(URL_DELAY, {
    method: 'GET',
    cache: 'no-cache',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status + 'Error');
      }
    })
    .then((json) => {
      idUser.innerHTML = json.data.id;
      emailUser.innerHTML = json.data.email;
    })
    .catch((error) => {
      console.error(error);
    });
    */
  /***************/
  //Aqui abrimos el try, antes de llamar o usar await
  try {
    //Añadiremos los datos introducidos en los campos a nuestra URL
    let URL_DELAY = BASE_URL + user + '?delay=' + numsecs;

    //nos devolverá una respuesta, esperaremos con await y si algo va mal, saldrá el error en el catch
    //PETICION GET
    const response = await fetch(URL_DELAY, {
      method: 'GET',
      cache: 'no-cache',
    });
    //Si todo a ido bien, seguiremos obteniendo nuestro json, para después rellenar los campos ID y EMAIL del user con el JSON devuelto
    if (response.ok) {
      const json = await response.json();
      idUser.innerHTML = json.data.id;
      emailUser.innerHTML = json.data.email;

      let datos = JSON.stringify(json.data);
      //Aqui enviaremos los datos en formato JSON a nuestra URL,
      // añadiremos la cabecera, enviamos un JSON
      const responsePOST = await fetch(POSTMAN_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: datos,
        cache: 'no-cache',
      });
      //SI TODO VA BIEN, obtenemos los datos llegados desde el envio de datos,
      // que es un JSON que procesamos y obtenemos el nombre del user, si algo va mal,
      // lanzamos el estado de la peticion
      if (responsePOST.ok) {
        const jsonPOST = await responsePOST.json();
        let datosPOST = JSON.parse(jsonPOST.data);
        firstName.innerHTML = datosPOST.first_name;
        status.innerHTML = responsePOST.status;
      } else {
        throw response.status;
      }
    } else {
      throw response.status;
    }
    //En nuestro catch, capturamos el error lanzado anteriormente
  } catch (error) {
    status.innerHTML = error;
  }
}
