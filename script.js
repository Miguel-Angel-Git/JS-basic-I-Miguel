//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

const NumeroEjercicio = {
  //contador de Ejercicios
  numero: 0,
  contarEjercicio: function () {
    this.numero++;
    console.log("                                                           - - - - Número ejercicio: " + this.numero + " - - - - ");
  },
};

console.log("Hola soy tu consola y juntas vamos a aprender Javascript");

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

NumeroEjercicio.contarEjercicio();

console.log(
  "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5"
);

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.
NumeroEjercicio.contarEjercicio();

let cadena = "es una cadena";
console.log("soy una Cadena?: " + cadena);
let number = 66;
console.log("Que numero soy: " + number);
let isTrue = false;
console.log("es verdadero?: " + isTrue);
let isNull = null;
console.log("soy nulo: " + isNull);
let indefinido = undefined;
console.log("soy indefinido: " + indefinido);

const caja = {
  queSoy: "Caja del cachopo",
  hablar: function () {
    console.log("soy " + this.queSoy + ", MALDITA SEA!, y un objeto!!! en JS");
  },
};

caja.hablar();

let arr = [];

console.log("Lista array con elementos");

arr.push("primer elemento");
arr.push("segundo elemento");
arr.push("tercer elemento");

arr.forEach((element) => {
  console.log(element);
});
console.log("Fin de la lista de Arrays");

//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.
NumeroEjercicio.contarEjercicio();
console.log("No existe el ejercicio 3");
NumeroEjercicio.contarEjercicio();

let var1 = 7,
  var2 = 5;
console.log("la suma de " + var1 + " y " + var2 + " es: " + (var1 + var2));

//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.
NumeroEjercicio.contarEjercicio();

console.log("la resta de " + (var1 + " y " + var2) + " es: " + (var1 - var2));

//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.
NumeroEjercicio.contarEjercicio();

console.log(
  "la multiplicacion de " + (var1 + " y " + var2) + " es: " + var1 * var2
);

//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.
NumeroEjercicio.contarEjercicio();

console.log("la division de " + var1 + " y " + var2 + " es: " + var1 / var2);

//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.
NumeroEjercicio.contarEjercicio();

var valor1 = 1,
  valor2 = 2;
console.log("es verdadera? " + (var1 == var2));

// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.
NumeroEjercicio.contarEjercicio();

var verdaderoOFalso = valor1 == valor2;
console.log("Dime verdadero: " + !verdaderoOFalso); // La niego con ! por que da falso y el ejercio pide que de el resultado sea verdadero, yo hice el ejercicio con el resultado que se ha pedido,

//Ejercicio 10: completa el ejercicio
NumeroEjercicio.contarEjercicio();

let num1 = 15;
let num2 = 20;

let comparacion = !(num1 + num2);
console.log(comparacion);

//Ejercicio 11: completa el ejercicio
NumeroEjercicio.contarEjercicio();
let num3 = 1;
let num3AsString = "1";

let result = num3 == num3AsString;

//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result);

//Ejercicio 12: completa el ejercicio
NumeroEjercicio.contarEjercicio();
let result2 = num3 == 1 * num3AsString;

//Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2);

//OPERADORES DE CADENAS
//Ejercicio 13: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.
NumeroEjercicio.contarEjercicio();

let nombre = "Miguel";
let apelligo = "Git";
console.log(nombre + " " + apelligo);

//OPERADORES DE LÓGICA
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)
NumeroEjercicio.contarEjercicio();

let a = 6;
let b = 3;

let res = a < 10 == b > 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res);

let res2 = a < 10 == b < 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2);

let res3 = ((a == 5) != b) == 5; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3);

let res4 = ((a == 6) == b) == 0; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4);

let res5 = a == 0 || b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5);

let res6 = a == 6 && b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6);
