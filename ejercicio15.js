const readline = require('readline');

// Configuramos la interfaz de readline para leer desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  let opcion;

  // Función recursiva para mostrar el menú hasta que el usuario elija "Salir"
  function pedirOpcion() {
    console.log(`
      Menú de opciones:
      1. Ver información
      2. Realizar una acción
      3. Salir
    `);

    rl.question("Ingresa el número de la opción que deseas elegir: ", function(input) {
      opcion = parseInt(input);

      // Verificar la opción elegida y realizar la acción correspondiente
      switch (opcion) {
        case 1:
          console.log("Aquí está la información que solicitaste.");
          pedirOpcion(); // Volver a mostrar el menú después de mostrar la información
          break;
        case 2:
          console.log("Realizando la acción...");
          pedirOpcion(); // Volver a mostrar el menú después de realizar la acción
          break;
        case 3:
          console.log("¡Hasta luego!");
          rl.close(); // Salir del programa
          break;
        default:
          console.log("Opción no válida. Por favor, elige una opción entre 1 y 3.");
          pedirOpcion(); // Volver a mostrar el menú si la opción es inválida
          break;
      }
    });
  }

  pedirOpcion(); // Llamamos a la función para que empiece el ciclo
}

mostrarMenu();