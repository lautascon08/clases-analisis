tallerCicloFor.js
//Diseñe un algoritmo que reciba 2 números sin ningún orden. El algoritmo debe contener un ciclo for que imprima los números consecutivos ascendentemente, cuyo rango está dado por los dos números que ingresó el usuario.
console.log ("punto1");
var numero1=perseInt(prompt("ingrese un numero"));
var numero2=prmpt("ingrese otro numero");
var sumatoria=0
if(numero1>numero2){
   var termina=numero1;
   var inicio=numero2;
}else{
   termina=numero2;
   inicio=numero1;
}
for(var i=inicio; i<=termina;i++){
   console.log(i)      
}

console.log("punto2");

var tablas=prompt("ingrese un nemero");
var aunmenta
for(var i=0; i<=10; i++){
   console.log(tablas + "x" + 1 +"=" + tablas*i)
}

console.log("punto3")
var tablas2=prompt("ingrese un numero");
var finaltablas=prompt("ingrese un numero para que sea limite")
var aunmenta2
for(var i=0; i<=finaltablas;i++){
   console.log(tablas2 + "x" + i + "=" + tablas2*i);
}

console.log("punto4");

var arregloNum=[]
for(var i=0; i=<10; i++){
   var numero4=prompt("ingrese 10 numeros");
   arregloNum.push(numero4);
}
console.log (arregloNum);
var mayor4=0;

for(var i=0; i<=arregloNum.length; i++){
   if(mayor4<arregloNum[i])
   mayor4=arregloNum[i];
}
console.log("el numero mayor es " + mayor4);

console.log("punto5");
var areegloProductos=[]
var nombreProduscto;
var arregloPrecio=[]

for(var i=1; i<=5; i=++){
   nombreProducto=prompt("ingrese productos de su preferencvia " + i)
   arregloProductos.push(nombrePoducto);
}
console.log (arregloProductos);
for(var i=0; i<arregloProductos.length; i++){
   var precioproducto=prompt("ingrese el precio del producto" + arregloProductos[i]);
   arregloPrecio.push(precioproducto);



   
   console.log("punto6");
   var nombreArticulo=prompt("ingrese el nombre de un producto para conocer el precio")

   for(vari=0; i<arreglloNombres.length; i++){
      if(arregloNombre[i])==nombreArticulo){
         console.log("el precio de "+nombreArticulo+"es$" +arregloPrecio[i]);






