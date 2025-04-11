const readline = require('readline');

// Configuramos la interfaz de readline para leer desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cuentaRegresiva() {
  rl.question("Ingresa un número para iniciar la cuenta regresiva: ", function(input) {
    let numero = parseInt(input);

    if (isNaN(numero)) {
      console.log("Por favor, ingresa un número válido.");
      rl.close(); // Cerrar la interfaz si el número es inválido
    } else {
      // Realizar la cuenta regresiva
      const intervalo = setInterval(() => {
        if (numero >= 0) {
          console.log(numero);
          numero--; // Decrementar el número
        } else {
          console.log("¡Cuenta regresiva terminada!");
          clearInterval(intervalo); // Detener el intervalo cuando termine la cuenta
          rl.close(); // Cerrar la interfaz
        }
      }, 1000); // Espera de 1 segundo (1000 ms) entre cada número
    }
  });
}

cuentaRegresiva();