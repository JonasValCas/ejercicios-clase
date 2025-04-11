const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumarNumeros() {
  let suma = 0;
  let numero;

  // Función recursiva para sumar números hasta que el usuario ingrese 0
  function pedirNumero() {
    rl.question("Ingresa un número para sumar (ingresa 0 para detenerte): ", function(input) {
      numero = parseInt(input);

      // Verificar si el número es válido
      if (isNaN(numero)) {
        console.log("Por favor, ingresa un número válido.");
        pedirNumero(); // Volver a pedir si el número no es válido
      } else if (numero !== 0) {
        suma += numero; // Sumar el número si no es 0
        pedirNumero(); // Seguir pidiendo más números
      } else {
        console.log("La suma total es: " + suma); // Mostrar el resultado
        rl.close(); // Cerrar la interfaz de readline
      }
    });
  }

  pedirNumero(); // Llamar a la función para empezar a pedir los números
}

sumarNumeros(); // Ejecutar la función
