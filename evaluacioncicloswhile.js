evaluacioncicloswhile.js
//Cree un ciclo que se repita n veces (pregunte al usuario) y en cada repetición imprima si el número de la repetición es o no múltiplo de 5. Ejemplo: Si el ciclo va hasta el 10, debe imprimir para los números 1, 2, 3, 4, 6, 7, 8 y 9 que no son múltiplos de 5; para 0, 5 y 10 debe mostrar que sí es múltiplo de 5.
var max=prompt("ingrse el numero hasta donde quiere conocer los multiplos de 5");

var contador=0;

while(contador <= max){
    if(contador%5==0){
        console.log("EL",contador,"si es multiplo de 5");
        }else{
            console.log("EL",contador,"no es multiplo de 5");
        }
        contador++;
    }

//Pregunte al cajero de la tienda cuántos artículos va a registrar, a partir de eso diseñe un ciclo while que pida el precio de cada artículo y al final muestre un mensaje que diga el total a pagar por el cliente.
var acumulador= 0;
var cajero=prompt("ingrse los articulos que va a registrar");
var ciclo2=1

while (ciclo2<=cajero){
    var precio=parseInt(prompt("ingrse el precio de cada articulo"));
    acumulador=(cajero * precio)
    ciclo2+=1
    }
    console.log("el total a pagar es" + acumulador);

//Copie y pegue el algoritmo anterior, pero esta vez, el cajero debe tener la opción de continuar o no registrando artículos. Una vez deje de hacerlo, se muestra el mensaje con el total a pagar.
var acumulador= 0;
var cajero=prompt ("ingrse los articulos que van aregistrar");
var ciclo3+=1

while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}
0

// Modifique el código anterior (copie y pegue) para que ahora le aplique un descuento del 10% si la cantidad de artículos fue mayor a 8, 15% si es mayor que 15 y 20% si la cantidad de artículos es mayor a 25. El total a pagar debe mostrarse con el descuento aplicado.
var cajerovar 
var acumulador=0
var compr=1
var precio
var respuesta="si"
var porcentaje=100

while(respuesta=="si"){
precio=parseInt(prompt("por favor ingrese el precio de cada uno"))
acumulador= precio+acumuladorcompra+=1
respuesta=pompt("ingrse si quiere seguir con mas obejtos ");
}
if(cajero>=8||cajero<=14){
    console.log("se aplica el 10%");
    acumulador=precio+acumulador*0,9
    console.log("el precio total a pagar es",acumulador)
}
else if(cajero>=15||cajero<=24){
    console.log("se aplica el 15%");
    acomulador=precio+acumulador*0.85
    console.log("el precio total a pagar es", acumulador)
}
else if(cajero>=25){
    console.log("se aplica el 25%");
    acumulador=precio+acumulador*0.8
    console.log("el precio total a pagar es", acumulador)
}
//Diseñe un ciclo while cuyo límite es la cantidad de notas que el docente requiera digitar. Solicite una a una las notas y verifique si el estudiante perdió o no la asignatura (lleve conteo de ambos). Al finalizar el ciclo, si el número de estudiantes reprobados es igual o mayor que los aprobados, debe mostrar un mensaje que diga “Debe abrirse el curso de verano”, sino, “La cantidad de estudiantes no es suficiente para curso de verano”.
//punto 5 
var cicloE;
var acumuladorE=5
var cantidad =promt ("por favor ingrese una a una las notas de sus estudiantes");
var aprobado=0;
var reprobadas=0;

while (ciclo<=cantidadN){
    var nota =perseInt(promt("ingrese el valor dde la nota"));
    acumuladorE=0;
    cicloE+=1;
    if(nota<3.5){
        console.log("el estudiante no aprovo la materia")
        reprobados+=1
}else if (nota>=3.5){
    console.log("el estudiante aprovo su materia ");
    aprovado+=1;
}if(aprovados>reprovados){
    console.log("la cantidad de estudiantes no es suficiente para curso en verano");
}else if(reprobados>aprovados)
console.log("si debe abrirse el curso de verano");
       }

