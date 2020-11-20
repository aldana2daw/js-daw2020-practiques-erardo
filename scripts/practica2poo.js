//Creamos nuestro Array
let miArray = [5, 6, 4, 10, 9, 5, 8];
//Añadimos el nuevo metodo para calcular la media de

// nuestro array con ".prototype" del Objeto de tipo Array
Array.prototype.calcMediaAritmetica = function () {
  let acumulador = miArray.reduce(function (acu, valor) {
    return acu + valor; //Devolvemos el acumulador más el valor siguiente
  }, 0); //Si no hay nada defecto devolvemos 0
  return (promedio = acumulador / miArray.length);
};

//Otra solución para practicarlo con función flecha
Array.prototype.otraFun = function () {
  return (acumulador =
    miArray.reduce((acu, valor) => acu + valor, 0) / miArray.length);
};

//Creamos una variable para hacer el toString y que sea más legible
let cadenaArray = miArray.toString();
document.write('<br>Datos array: ' + cadenaArray);

//usamos nuestro metodo para calcular la media aritmeticaa
document.write('<br>Media aritmética: ' + miArray.calcMediaAritmetica());
document.write('<br>Media aritmética: ' + miArray.otraFun());
