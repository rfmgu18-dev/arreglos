console.log ("hola mundo");

// Selectores en JavaScript

title = document.getElementById("title");
console.log(title);

// const nombre = prompt("Hola, como te llamas?"); // Solicitar al usuario que ingrese su nombre y guardarlo en una variable
// console.log(nombre);

// const apellido = prompt("Hola " + nombre + ", cual es tu apellido?");  //Solicitar al usuario que ingrese su apellido y guardarlo en una variable
// console.log(apellido);

// const edad = prompt(nombre + " " + apellido + ", lindo nombre! Dime cuantos años tienes?"); // Solicitar al usuario que ingrese su edad y guardarlo en una variable
// console.log(edad);

// alert("Bienvenido " + nombre + " " + apellido + " con " + edad + " años a JavaScript");

const suma = document.querySelector("#suma");

// listener

const cambiarTema = () => body.classList.toggle("dark-theme");

const body = document.querySelector("body");
const cambTema = document.querySelector("#cambTema");
cambTema.addEventListener("click", cambiarTema);
suma.addEventListener("click", Event => {
const valorCorrecto = 20;
const resultadoUsuario = Event.target.value;

// COndicional 
if (resultadoUsuario == valorCorrecto) {
    alert("Felicidades, tu respuesta es correcta!");

    info.textContent = "Respuesta correcta!1!";
    info.style.color = "green";
} else {
    info.textContent = "Respuesta incorrecta"
    info.style.color = "red";
}

})

const suma2 = document.querySelector("#suma2");

suma2.addEventListener("click", Event => {
    const valorCorrecto = 35;
    const resultadoUsuario = Event.target.value; 

    if (resultadoUsuario == valorCorrecto) {
        alert("Felicidades, tu respuesta es correcta!");

            info2.textContent = "Respuesta correcta!1!";
    info2.style.color = "green";
} else {
    info2.textContent = "Respuesta incorrecta"
    info2.style.color = "red";
}

    
})

enviaResultado.addEventListener("click", event => {
    const valorCorrecto = 35;
    const resultadoUsuario = suma2.value;
    if (resultadoUsuario == valorCorrecto) {
        alert("Felicidades, tu respuesta es correcta!");
    } else {
        alert("Respuesta incorrecta");
    }
})