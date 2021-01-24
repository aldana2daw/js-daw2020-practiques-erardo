/**
 * Práctica 1 APIS Erardo Aldana Pessoa
 */
//Evento que ocurre cuando la ventana se ha cargado completamente, trabajaremos con algunas
window.addEventListener('load', (ev) => {
  let sesionUser = sessionStorage.getItem('sesionUser');

  if (sesionUser !== null) {
    document.getElementById('userSesion').innerHTML = sesionUser;
    //console.log('user: ' + sesionUser);
  }
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    //Guardado del nombre en SesionStorage
    sessionStorage.setItem('sesionUser', user.value);
  });
});

//Método para limpiar campos de info
function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    //console.log(element);
  });
}
