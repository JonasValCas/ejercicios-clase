const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definir el usuario y la contraseña correcta
const usuarioCorrecto = 'usuario123';
const contrasenaCorrecta = 'password123';

// Función para pedir datos de usuario
function pedirDato(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// Función principal para intentar el login
async function intentarLogin() {
    let intentos = 0;  // Contador de intentos

    while (intentos < 3) {
        // Pedir usuario y contraseña
        const usuario = await pedirDato('Ingresa tu usuario: ');
        const contrasena = await pedirDato('Ingresa tu contraseña: ');

        // Verificar si el usuario y la contraseña son correctos
        if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
            console.log('✅ Login exitoso. Bienvenido!');
            rl.close();  // Cerrar la interfaz cuando el login es correcto
            return;  // Salir de la función
        } else {
            intentos++;  // Incrementar los intentos fallidos
            console.log(`❌ Usuario o contraseña incorrectos. Intento ${intentos}/3`);
        }
    }

    console.log('❌ Has fallado los 3 intentos. Acceso denegado.');
    rl.close();  // Cerrar la interfaz cuando se agotan los intentos
}

intentarLogin();