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
function potencia (num1,num2){
    var resultado = num1 ** num2;
    var mensaje = "el resultado de potensia "+ num1 + "y" + num2 + "es" + resultado;
   // return mensaje
    return resultado
}
function main_geometria(){
    var eleccion = prompt("por favor escriba el numero de la figura que desea realizar: \n 1.cuadrado \n 2.rectangulo")

    var eleccion2 = prompt("por favor escriba si desea hallar area o perimetro : \n 1.area \n 2.perimetro")

    var numero1 = parseFloat(prompt("por favor ingrese el ancho de la figura:"));
    var numero2 = parseFloat(prompt("porfavor ingrese el alto de la figura"));

    if(eleccion == 1){
        if(eleccion2 == 1){
           console.log("el area del cuadrado es " +potencia(numero1,2))

        }

    }else if(eleccion ==2){
        if(eleccion2 == 1){
            console.log("el area del rectanguloc es " +multiplicacion(numero2,numero1))
 
         }

    }else if(eleccion == 1){
    if(eleccion2 == 2){
       console.log("el perimetro del cuadrado es " +multiplicacion(numero1,4))
       
          }
    
    }else if(eleccion == 2){
        if(eleccion2 == 2){
        var resultadoaltura = multiplicacion(numero1,2);
        var resultadobase = multiplicacion(numero2,2);
           console.log("el perimetro del rectangulo es " +suma(resultadoaltura,resultadobase))
            
           }

    }





}