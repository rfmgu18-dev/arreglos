console.log("Hello pipol!");

// Variables: let, constantes

const pi = 3.1416;

// ESTRUCTURA DE UNA VARIABLE:"tipo nombre_variable = valor ;"

let nombre = "Ruben";

let apellido; //variable sin valor

// Investigar null, undefined para la proxima clase (que es, para que, diferencias, etc)


console.log(nombre);

nombre = "Miguel";

//ver los tipos de datos de las variables
console.log ("El tipo de datos de nombre es:" , typeof nombre);
console.log ("El tipo de datos de edad es:", typeof edad);

edad = String(edad); //convertir un numero a string

// concatenacion string con una variable

console.log ("Edad despues de la conversion:" , edad);
console.log ("El tipo de dato de edad despues de la conversion es:", typeof edad);

console.log ("El tipo de dato de isMarried es:", typeof isMarried);
console.log ("El tipo de dato de apellido es:" , typeof apellido);



// Estructuras de datos: arreglos y objetos

// arreglos 

let zapatos = ["Nike", "Puma", "Adidas", "New Balance", "Vans"];

console.log ("Arreglo de zapatos:", zapatos);

let primerZapato = zapatos[0]; //acceder a un elemento del arreglo

let segundoZapato = zapatos[1];

let tercerZapato = zapatos[2];

let cuartoZapato = zapatos[3];


for (let index = 0; index < zapatos.length; index++) {
console.log ("El zapato en la posición", index, "es", zapatos[index]);
}

console.log ("La cantidad de zapatos es:", zapatos.length);

zapatos.push("Reebok"); //agregar un elemento al final del arreglo

console.log ("Arreglo de zapatos despues de agregar Reebok:", zapatos);

// Objetos en JavaScript

let persona = {
    nombre: "Marcos",
    apellido: "Gomez",
    edad: 30,
    isMarried: false,
    hobbies: ["futbol", "musica", "viajar"] 
}
console.log ("Objeto persona:", persona);
console.log ("Nombre de la persona:", persona.nombre);
console.log ("Apellido de la persona:", persona.apellido);
console.log ("Edad de la persona:", persona.edad);
console.log ("Estado civil de la persona:", persona.isMarried);
console.log ("Hobbies de la persona:", persona.hobbies);


console.log 
