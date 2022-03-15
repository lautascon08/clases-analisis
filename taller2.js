//segundo taller 8/3/22
// maria alejandra y laura tascon
var lado = prompt ("ingrese el lado del cuadrado ")
console.log(" el cuadrado vale " + lado);
var area 
area = lado **2;
console.log ("el area del cuadrado "+ area );
var cubo = prompt ("ingrese el lado del cubo ");
console.log("el cuadrado vale"+ cubo)
var VolumenCubo 
volumenCubo=cubo**3;
console.log("ingrese el lado del cubo");

//halle el area y el perimetro del rectangulo
var altura = prompt ("ingrse la altura del rectangulo para obtener el area ");
var base = prompt("ingrese la base del rectangulo para obtener el area");
var rectangulo = altura*base;
console.log(rectangulo);

var diametrocirculo  =prompt ("ingrese el diametro del circulo ");
console.log("el diametro del circulo vale "+diametrocirculo);
var radiocirculo
radio=diametrocirculo/2;
console.log(radio)
var are=radio *Math.PI;
console.log("el area del circuloes" + area)

var base1
var base2
var h
var areaT  
base1=prompt("porfavor ingrese el valor que usted quiera");
base2=prompt("porfavor ingrese otro valor que usted quiera");
h=prompt("porfavor ingrese la altura");
areaT=1/2*(base1+base2)*h

var anchoP
var profundoP
var largoP
anchoP=prompt("por favor ingrese el ancho de la piscina");
profundoP=prompt("por favor ingrese la profundidad de la piscina");
largoP=prompt("por favor ingrese el largo de la piscina");
console.log(anchoP*profundoP*largoP);

var altoM
var anchoM
altoM=prompt("por favor ingrese la alturade de el muro");
anchoM=prompt("por favor ingrese el ancho del muro");
console.log(altoM*anchoM*22.000);

var longCM;
var volumDC;
var masaMR;
var disTKM;
var rest;
var tot;
var igual;
var totalito;
longCM=prompt("por favor escriba una longitud en CM");
rest=(longCM*0.00001);
console.log("la distancia en kilometros es " + rest);
volumDC=prompt ("por favor digite el volumen en decilitros ")
tot= (volumDC*0.00001);
console.log("el volumen en total es "+ tot)
masaMR=prompt("por favor ingrese la masa en microgramos ")
igual=(masaMR*1e-6)
disTKM=prompt("por favor ingrese la distacia en kilometros ")
totalito=(disTKM*1000000)
console.log(" la distacia en milimetros es "+ totalito)


