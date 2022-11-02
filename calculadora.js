function suma(num1,num2){
    var resultado = num1 + num2;
    var mensaje = "el resultado de suma "+ num1 + "y" + num2 + "es" + resultado;
   // return mensaje
    return resultado
}
function resta(num1,num2){
    var resultado = num1 - num2;
    var mensaje = "el resultado de restar "+ num1 + "y" + num2 + "es" + resultado;
    //return mensaje
    return resultado
}
function multiplicacion(num1,num2){
    var resultado = num1 * num2;
    var mensaje = "el resultado de multiplicacion"+ num1 + "y" + num2 + "es" + resultado;
    //return mensaje
    return resultado
}
function division(num1,num2){
    var resultado = num1 / num2;
    var mensaje = "el resultado de division "+ num1 + "y" + num2 + "es" + resultado;
    //return mensaje
    return resultado
}
function potensia (num1,num2){
    var resultado = num1 ** num2;
    var mensaje = "el resultado de potensia "+ num1 + "y" + num2 + "es" + resultado;
   // return mensaje
    return resultado
}
function main_calculadora(){
    var eleccion = prompt("por favor ingrese el numero de la operacion que desea realizar: \n 1.suma \n 2.resta \n 3.division \n 4.multiplicacion \n 5.potencia\n 6.doble de una suma \n 7.mitad de un producto ");

var numero1 = parseFloat(prompt("por favor ingrese el primer valor:"));
var numero2 = parseFloat(prompt("porfavor ingrese el segundo vlor"));

if(eleccion == 1){

console.log(suma(numero1, numero2));
} else  if(eleccion ==2 ){




}else if(eleccion == 6){
    var resultadoSuma = suma(numero1,numero2);
    
    console.log("El doble de la suma de" + numero1 + "y" + numero2 + "es " + multiplicacion(resultadoSuma,2))

}else if (eleccion ==7){
