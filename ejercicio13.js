const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un número para la cuenta regresiva: ", (input) => {
    let numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, ingresa un número válido (mayor o igual a 0).");
        rl.close();
        return;
    }

    console.log(`\n📉 Cuenta regresiva desde ${numero} hasta 0:`);

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

    rl.close();
});