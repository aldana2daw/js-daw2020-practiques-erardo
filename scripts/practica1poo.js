//Definimos la funcion constructora de Punto
function Punto(corX, corY) {
  var cX;
  var cY;
  //Comprobar si los valores no son numeros o si y poner por ddefecto valor 0
  if (isNaN(corX) || isNaN(corY)) {
    if (isNaN(corX)) {
      this.cX = 0;
    } else {
      this.cY = 0;
    }
  }
  /* this.comprobarNumeros=function(){
    if (isNaN(corX) || isNaN(corY)) {
      if (isNaN(corX)) {
        this.cX = 0;
      }
      if(isNaN(corY)) {
        this.cY = 0;
      }
    }
  }*/
  //Nuestro método para cambiar las coordenadas del punto, sobreescribe las coordenadas
  this.cambiar = function () {
    this.x = corX;
    this.y = corY;
  };
  //Metodo para copiar el objeto
  this.copia = function () {
    return new Punto(this.cX, this.cY);
  };

  //Aquest mètode rep un segon punt i torna un tercer punt resultat de sumar les coordinades dels dos anteriors
  this.suma = function (coordX, coordY) {
    if (isNaN(coordX) || isNaN(coordY)) {
      if (isNaN(coordX)) {
        coordX = 0;
      } else {
        coordY = 0;
      }
    }
    if (isNaN(coordX)) return new Punto(this.cX + coordX, this.cY + coordY);
  };
}
