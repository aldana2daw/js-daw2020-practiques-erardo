//Definimos la funcion constructora de Punto
function Punto(corX, corY) {
  //Comprobar si los valores no son numeros o si y poner por defecto valor 0 o establecer los valores
  //Ternario
  this.cX = isNaN(corX) ? 0 : corX;
  this.cY = isNaN(corY) ? 0 : corY;

  //Nuestro método para cambiar las coordenadas del punto, sobreescribe las coordenadas
  this.cambiar = function (cambX, cambY) {
    this.cX = cambX;
    this.cY = cambY;
  };
  //Metodo para copiar el objeto
  this.copia = function () {
    return new Punto(this.cX, this.cY);
  };

  //Este metodo subraya con los datos anteriores y suma las nuevas coordenadas
  //al punto anterior y devuelve el nuevo correspondiente a la suma
  this.suma = function (coordX, coordY) {
    if (isNaN(coordX) || isNaN(coordY)) {
      if (isNaN(coordX)) {
        coordX = 0;
      }
      if (isNaN(coordY)) {
        coordY = 0;
      }
    }
    return new Punto(this.cX + coordX, this.cY + coordY);
  };
}

//Creación de puntos
var punto1 = new Punto(7, 'hola');
var punto2 = new Punto(6, 3);

document.write(
  '<br>Valores de punto1 con (7,"hola"): ' + punto1.cX + ' ' + punto1.cY
);
document.write(
  '<br>Valores de punto2 con (6,3): ' + punto2.cX + ' ' + punto2.cY
);
// Cambiamos el valor
punto2.cambiar(5, 4);
document.write(
  '<br>Valores cambiados de punto2 con (5,4): ' + punto2.cX + ' ' + punto2.cY
);
//Copiamos el valor
var puntoCopia = punto2.copia();
document.write(
  '<br>Valores de puntoCopia de punto2: ' + puntoCopia.cX + ' ' + puntoCopia.cY
);
//Sumar al punto X=3 e y=3
var puntoSumado = puntoCopia.suma(3, 3);
document.write(
  '<br>Valores de puntoSumado con 3,3: ' + puntoSumado.cX + ' ' + puntoSumado.cY
);
