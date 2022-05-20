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
