/* Funciones con retorno en cosola */

function sumar_consola (a, b){
  console.log("Funcion sumar")
  return a + b;
}
function restar_consola (a, b){
  console.log("Funcion restar")
  return a - b;
}
function multiplicar_consola (a, b){
  console.log("Funcion multiplicar")
  return a * b;
}
function dividir_consola (a, b){
  console.log("Funcion dividir")
  return a / b;
}
function cuadradoDeUnNumero (a){
  console.log("El cuadrado de este número es:")
  return a * a ;
}
function promedioDeTresNumeros (a, b, c){
  console.log("El promedio es:")
  return (a + b + c) / 3
}
function calcularPorcentaje (a, b){
  console.log("El porcentaje es:")
  return (a * b) / 100
}
function GeneradorDePorcentaje (a, b){
  console.log("El porcentaje es:")
  return (a * 100) / b
}

/* Funciones declaradas */
function saludar (nombre){
  return 'Hola' + nombre;
}

/* Funciones expresadas */
let triplicar = function (numero){
return numero * 3;
}

function sumar() {
    let elem = document.getElementById("suma1").value;
    elem = Number(document.getElementById("suma1").value) + Number(document.getElementById("suma2").value)
    console.log("La suma es " + elem)
  }

  function restar() {
    let elem = document.getElementById("resta1").value;
    elem = Number(document.getElementById("resta1").value) - Number(document.getElementById("resta2").value)
    console.log("La resta es " + elem)
  }

  function dividir() {
    let elem = document.getElementById("division1").value;
    elem = Number(document.getElementById("division1").value) / Number(document.getElementById("division2").value)
    console.log("La división es " + elem)
  }

  function multiplicar() {
    let elem = document.getElementById("multiplicacion1").value;
    elem = Number(document.getElementById("multiplicacion1").value) * Number(document.getElementById("multiplicacion2").value)
    console.log("La multiplicación es " + elem)
  }


