const readline = require('readline');

// Configuramos la interfaz de readline para leer desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function intentarLogin() {
  const usuarioCorrecto = "usuario123";
  const contrasenaCorrecta = "contrasena123";
  
  let intentos = 0;
  let exito = false;
  
  // Función recursiva para intentar el login
  function pedirDatos() {
    rl.question("Ingresa tu nombre de usuario: ", function(usuario) {
      rl.question("Ingresa tu contraseña: ", function(contrasena) {
        if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
          exito = true; // Login exitoso
          console.log("¡Login exitoso! Bienvenido.");
          rl.close(); // Cerrar la interfaz
        } else {
          intentos++;
          if (intentos < 3) {
            console.log(`Datos incorrectos. Te quedan ${3 - intentos} intentos.`);
            pedirDatos(); // Volver a pedir los datos si quedan intentos
          } else {
            console.log("Has agotado los 3 intentos. Acceso bloqueado.");
            rl.close(); // Cerrar la interfaz después de los intentos fallidos
          }
        }
      });
    });
  }

  pedirDatos(); // Llamar a la función para empezar el proceso de login
}

intentarLogin();