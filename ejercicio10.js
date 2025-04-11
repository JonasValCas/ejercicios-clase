const readline = require('readline');

// Configuramos la interfaz de readline para leer desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function imprimirTablaDeMultiplicar() {
  rl.question("Ingresa un número para ver su tabla de multiplicar: ", function(numero) {
    // Convertimos la entrada a número
    const num = parseInt(numero);

    // Verificamos si es un número válido
    if (isNaN(num)) {
      console.log("Por favor, ingresa un número válido.");
    } else {
      // Imprimimos la tabla de multiplicar
      for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
      }
    }

    // Cerramos la interfaz de readline
    rl.close();
  });
}

// Llamar a la función para ejecutarla
imprimirTablaDeMultiplicar();