console.log("hola mundo");
// comentarios en linea
/*comentario
de
varias
lineas
*/


var nombreUsuario
let edadUsuario
/*Declarar Variables
*/
var nombevariable;
// crear variable sin asignar valor 
/*
inicializar variables:
asignar un valor al momento de crear la variable
*/
var gradoEstudiante="10A";
/*
asignar valor:
igualar una variable existente a un nuevo valor
*/
edadUsuario=16;
console.log(edadUsuario);

//Asignar valor desde otra variable 
var edad=17;
edadUsuario=edad;
console.log(edadUsuario);

/*asignar valor desde el teclado:
existen dos maneras de hacerlo, la primera es por ventana emergente y la segunda es por medio de un formulario en html
*/
var valor=prompt("ingrese un valor");
console.log("la variable vale  " + valor);
/*
contantes: son valores que no pueden ser cambiados durante la ejecucion del codigo.las constantes siempre deben ser inicialisadas
*/
const PI=3.1416;
// imprimir por consola

//simple
console.log("");
console.log(valor);
//concatenado
console.log("" + valor);
//operadores//
//suma//
var suma;
suma=5+4;
console.log(suma);
var a=12
suma=a +8 
console.log(suma);
var b=20;
suma=a+b;
console.log(suma);
//resta//
var resultado
resultado=a-b;//-8
console.log(resultado);
resultado=b-a;//8
console.log(resultado);
//multiplicacion
var producto;
producto=a*b;
console.log(producto);
//Division
var division;
division=a/b;
console.log(division);
division=b/a;
console.log(division);
//orden de operaciones
var rasult
result=a*b;//
console.log(result);
result=a*b-10;
console.log(result);
result=a*(b-10);
console.log(result);
//exponente/potecia
var exp=3**2;
console.log(exp);
exp=3**3;
console.log(exp);
//cadenas o string//
var cadenita1="3";
var cadenita2="5";
var sumacadenas=cadenita1+cadenita2;
console.log(sumacadenas);
var nombrecito="Andres";
var apellidito="Bueno";
var nomcompleto=nombrecito+apellidito;
console.log(nomcompleto);
var nombrecito="Andres";
var longitud=nombrecito.length;
console.log(longitud);
console.log(nomcompleto.length);
console.log(longitud);
//Encontrar caracteres dada la posicion en el vector//
var primeraLetra;
primeraLetra=nombrecito[0];
console.log(primeraLetra);
console.log(nombrecito[1]);

//Encontrar la ultima posicion de una cadena o vector//
console.log(nombrecito[nombrecito.length-1]);
//se debe buscar la longitud de la cadena y restarle 1 para encontrar la ultima letra
//valores inmutables
//las posiciones de una cadena se pueden consultar pero no se puede reasignar su valor
//
nombrecito[0]="P"
console.log(nombrecito);
nombrecito="Mauricio";
console.log(nombrecito);

//paeseo o casting
//* se trata de convertir las variables a otro tipo de dato ,los cambios existentes son :
/*
* a entero parseInt()
* a decimal parSe Float()
* a cadena String ()

*/
//convertir variable
var entero1=promt("Ingrese un entero ");
var entero2=promt("Ingrese otro entero");
var sumaE=entero1+entero2;
console.log("sin parfseInt" + sumaE);

//forma1
/*convertir el dato justo en el momento en que se recibe por teclado 
esto implica que cuando se llame la variable ya este convertida al tipo de dato deceado*/

entero1= parseint (promt("Ingrese un entero "));
 entero2=parseint (promt("Ingrese otro entero"));
 sumaE=entero1+entero2;
console.log("sin parfseInt" + sumaE);
console.log("convertido"+ sumar); 
 
//taller solicitar la altura de rectangulo solicitar la base del rectangulo
altura=parseInt ( prompt("ingrse la altura del rectangulo "));
base=parseInt (prompt("ingrse la base del rectangulo"));
perimetro= altura + base + altura + base;
console.log("convertido" + perimetro);







 





