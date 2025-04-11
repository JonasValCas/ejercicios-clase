const readline = require('readline');

// Configuramos la interfaz de readline para leer desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumeroMayorQueCero() {
  let numero;

  // Usamos un bucle while para seguir pidiendo el número hasta que sea válido
  function pedir() {
    rl.question("Ingresa un número mayor que 0: ", function(input) {
      numero = parseInt(input);

      // Verificamos si el número es válido (mayor que 0)
      if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, ingresa un número válido mayor que 0.");
        pedir(); // Pedir nuevamente si no es válido
      } else {
        console.log(`El número ingresado es: ${numero}`);
        rl.close(); // Cerrar la interfaz después de recibir un número válido
      }
    });
  }

  pedir(); // Llamamos a la función para empezar a pedir el número
}

pedirNumeroMayorQueCero();