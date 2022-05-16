TallerCiclos.js
//crre un ciclo while que se repita 7 veces, en cada vez debe imprimir el numero de repeticones que lleva//
var CantR=0;

while(CantR < 7){
    console.log("va en la repeticion" + CantR);
    CantR += 1
}
//diseñe un ciclo while cuyo incremento vaya de tres en tres e imprima los multiplos de 3 desde el 0 hasta
el 30//
var CantSaludos=0;

while(CantSaludos < 11){
    console.log("3 en 3");
    CantSaludos += 3
}
//escriba un ciclo que imprima los numros pares hasta en 50//
var CantSaludos=0;

while(CantSaludos < 25){
    console.log("has llegado al 50!!");
    CantSaludos+= 3
}
//el usuario desea ver la lista de numeros impares desde (1) hasta determinado numero, el algoritmo debe recibir el limite e imprimir solo los numeros impares//
/*ejemplo: el usuario digita el  10, el algoritmo debe imprimir:
1
3
5
7
9
*/
var nums=promt("po favor imprima un numero")
while(CantSaludos < nums){
    console.log("has llegado a lo maximo");
    CantSaludos += 3
}
//consulte en internet¿como saber si un numero es par en javascript? y diseñe un ciclo que se detenga cuando el usuario escriba un numero
impar, mientras el numero sea par, debe imprimir un mensaje que diga el numero # es par//
var ciclo=prompt("ingrese un par para detenerse")

while(ciclo%2==0){
    ciclo=prompt("ingrse un par para detenerse")

//lea en la guia sobre acumuladores en ciclos.cree un ciclo cuyo limite sea la cantidad de estudiantes de su salon y recorre la suma (acumulado) de todas las edades de los estudiantes.

var acumulador= 0;
var vaorsuma;
var ciclo6=1
var cantP=prompt("por favor ingrse la cantidad de personas que hay en su salon")

while(ciclo6<=cantP){
    valorAsumar=parseInt(prompt("ingrese la edad del estudiante"))

    acumulador=valorAsumar + acumulador
    ciclo6