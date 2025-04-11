const readline = require('readline');

// Configuramos la interfaz de readline para leer desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function adivinarNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Generar número aleatorio entre 1 y 10
  let intento;

  // Iniciar un bucle para los intentos
  function pedirIntento() {
    rl.question("Adivina el número entre 1 y 10: ", function(input) {
      intento = parseInt(input);

      if (isNaN(intento)) {
        console.log("Por favor, ingresa un número válido.");
        pedirIntento(); // Volver a pedir el número si la entrada no es válida
      } else if (intento === numeroAleatorio) {
        console.log("¡Felicidades! Adivinaste el número.");
        rl.close(); // Salir del bucle y cerrar la interfaz de readline
      } else {
        console.log("Intenta nuevamente.");
        pedirIntento(); // Volver a pedir el número si no se adivinó
      }
    });
  }

  pedirIntento();
}

adivinarNumero();
