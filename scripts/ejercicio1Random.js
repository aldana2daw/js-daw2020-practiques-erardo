//Ejercicio CREAR LOTERIA
//Erardo Aldana 2 DAW

//primero, crearemos la constante max para poder usarla durante nuestro script y nuestro array vec
const max = 49;

function crearLoteria(cantidad) {
  let vec = new Array();
  for (let index = 0; index < cantidad; index++) {
    // crearemos nuestro bucle for para llenar nuestro array de 1 a max
    for (var i = 1; i < max; i++) {
      vec[i] = i;
    }

    // desordenar nuestro array:
    vec.sort(function () {
      return Math.random() - 0.5;
    });
    console.log(vec);
    vec = [];
  }
}
