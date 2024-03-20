
var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

//Visualizacion
console.log(diasSemana);

//Agregar
diasSemana.push("Otro dia");
console.log(diasSemana);

//Eliminar
diasSemana.shift();
console.log(diasSemana);

//While
var i = 0;
var total = 0;

console.log("Ciclo While");
while(i<=5){

    total += i
    i++
}
console.log("La suma es = "+total);

//Do While
var num = 5;
var facto = 1;

do{

    facto *= num;
    num--;

}while(num>0);

console.log("El factorial es: "+ facto);

//Ciclo For
console.log("Ciclo FOR");

for (i=0; i<7; i++){
    if(i != 3){
        console.log("Hola");
    }
    
    if(i == 3){
        console.log("Soy el 4to Hola");
    }
}

console.log("Acabamos de saludar");

//Ciclo For In

var persona = {
    nombre: "Pepe Nava Fierro",
    edad: 30,
    ciudad: "Tj"
  };
  
  for (var propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
  }

  //Ciclo For Each

var numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
  console.log(numero);
});

var colores = ["rojo", "verde", "azul"];

for (let color of colores) {
  console.log(color);
}
