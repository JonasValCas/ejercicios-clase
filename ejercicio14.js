const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero() {
    let numero;

    // Creamos una promesa para manejar la entrada asincrónica
    function pedirInput() {
        return new Promise((resolve) => {
            rl.question("Ingresa un número mayor que 0: ", (input) => {
                resolve(input);  // Resolvemos la promesa con el valor ingresado
            });
        });
    }

    // Hacemos un ciclo para asegurarnos de que el número es mayor que 0
    async function ciclo() {
        do {
            let input = await pedirInput();  // Esperamos a que el usuario ingrese el número
            numero = parseInt(input);

            if (isNaN(numero) || numero <= 0) {
                console.log("❌ Eso no es un número válido o es menor o igual a 0. Intenta de nuevo.");
            } else {
                console.log(`✅ ¡Número válido! El número ingresado es ${numero}`);
            }
        } while (isNaN(numero) || numero <= 0);  // Continuamos si el número no es válido o es menor que 0

        rl.close();  // Cerramos readline cuando el número es válido
    }

    ciclo();  // Llamamos a la función ciclo para que empiece el proceso
}

pedirNumero();