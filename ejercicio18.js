const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;  // Inicializamos la variable para la suma

// Función para pedir un número al usuario
function pedirNumero() {
    return new Promise((resolve) => {
        rl.question('Ingresa un número (o 0 para terminar): ', (numero) => {
            resolve(parseInt(numero));  // Convertimos el input a número
        });
    });
}

// Función para ejecutar la suma
async function sumarNumeros() {
    let numero;

    // Usamos while para seguir pidiendo números hasta que ingrese 0
    while (true) {
        numero = await pedirNumero();  // Pedir un número

        if (numero === 0) {
            console.log('✔️ El proceso ha terminado.');
            break;  // Salir del bucle si el usuario ingresa 0
        }

        suma += numero;  // Sumar el número ingresado
        console.log(`La suma actual es: ${suma}`);
    }

    console.log(`La suma total es: ${suma}`);
    rl.close();  // Cerrar la interfaz de readline
}

sumarNumeros(); 
