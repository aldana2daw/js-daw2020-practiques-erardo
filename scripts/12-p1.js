/**
 * Erardo Aldana 2DAW. Práctica Ajax.
 */

/**
 * Primero,
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

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

function procesarFetch(numsecs, user) {
  let URL_DELAY = BASE_URL + user + '?delay=' + numsecs;
  let idUser = document.getElementById('id');
  let emailUser = document.getElementById('email');
  let firstName = document.getElementById('name');
  let status = document.getElementById('status');

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
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
}

/**
 * Segundo,
 */
