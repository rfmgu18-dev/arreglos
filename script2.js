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

// const cambiarTema = () => body.classList.toggle("dark-theme");

// const body = document.querySelector("body");
// const cambTema = document.querySelector("#cambTema");
// cambTema.addEventListener("click", cambiarTema);
// suma.addEventListener("click", Event => {
// const valorCorrecto = 20;
// const resultadoUsuario = Event.target.value;

// // COndicional 
// if (resultadoUsuario == valorCorrecto) {
//     alert("Felicidades, tu respuesta es correcta!");

//     info.textContent = "Respuesta correcta!1!";
//     info.style.color = "green";
// } else {
//     info.textContent = "Respuesta incorrecta"
//     info.style.color = "red";
// }

// })

// const suma2 = document.querySelector("#suma2");

// suma2.addEventListener("click", Event => {
//     const valorCorrecto = 35;
//     const resultadoUsuario = Event.target.value; 

//     if (resultadoUsuario == valorCorrecto) {
//         alert("Felicidades, tu respuesta es correcta!");

//             info2.textContent = "Respuesta correcta!1!";
//     info2.style.color = "green";
// } else {
//     info2.textContent = "Respuesta incorrecta"
//     info2.style.color = "red";
// }

    
// })

// enviaResultado.addEventListener("click", event => {
//     const valorCorrecto = 35;
//     const resultadoUsuario = suma2.value;
//     if (resultadoUsuario == valorCorrecto) {
//         alert("Felicidades, tu respuesta es correcta!");
//     } else {
//         alert("Respuesta incorrecta");
//     }
// })







// innerHTML, textContent, innertext



const triviaContainer = document.querySelector("#triviaContainer");
const triviaTitle = document.querySelector("h1");

let userScore = 0;

const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["París", "Londres", "Roma", "Berlín"],
        correcta: "París"
    },
    {
        pregunta: "¿Cuál es la capital de España?",
        opciones: ["Madrid", "Barcelona", "Valencia", "Sevilla"],
        correcta: "Madrid"
    }
];

//2. Mostrar las preguntas y las opciones

preguntas.forEach(ObjetoPregunta => {
    triviaContainer.innerHTML += `
    <p>${ObjetoPregunta.pregunta}</p>
    <button>${ObjetoPregunta.opciones[0]}</button>
    <button>${ObjetoPregunta.opciones[1]}</button>
    <button>${ObjetoPregunta.opciones[2]}</button>
    <button>${ObjetoPregunta.opciones[3]}</button>
    <hr>

`
});


//3. Capturar la respuesta del usuario y verificar si es correcta

addEventListener("click", event => {
    console.log(event.target.innerText);

    const userRespuesta = event.target.innerText;
    console.log("El usuario respondió: " , userRespuesta);
    


  //4. Comparar respuesta del usuario con la respuesta correcta
  preguntas.forEach(ObjetoPregunta => {
    if (userRespuesta === ObjetoPregunta.correcta) {
        console.log("¡Respuesta correcta!");
        userScore++;
        event.target.setAttribute("class", "green");
    }

  })

  //5. Mostrar resultado al usuario

  console.log("Puntuación final: " + userScore);
  if (userScore === preguntas.length) {
      alert("¡Felicidades! Has respondido todas las preguntas correctamente.");
  }

    })